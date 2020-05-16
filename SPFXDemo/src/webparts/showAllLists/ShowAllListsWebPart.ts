import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPHttpClient } from "@microsoft/sp-http";
import { SPComponentLoader } from "@microsoft/sp-loader";
import * as strings from 'ShowAllListsWebPartStrings';

export interface IShowAllListsWebPartProps {
  description: string;
}

export default class ShowAllListsWebPart extends BaseClientSideWebPart<IShowAllListsWebPartProps> {

  public render(): void {
    SPComponentLoader.loadCss('https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css');
    this._readLists()
      .then(data => {
        let lists = data.value;
        console.log('Lists are ', lists);
        let html = '';
        for (let list of lists) {
          html += `<div class="alert alert-primary" role="alert">
                      ${list.Title} <span class="badge badge-light float-right">${list.ItemCount}</span>
                    </div>`
        }
        this.domElement.innerHTML = `
          <h1>This is MTM IT SharePoint Training SPFX Demo </h1>
          <h2> All Lists under ${this.context.pageContext.web.title} Site is </h2>
          ${html}
          `;
      }, error => console.error('Oops Error', error));

  }

  private _readLists() {
    const apiUrl = this.context.pageContext.web.absoluteUrl +
      '/_api/web/lists?$filter=Hidden eq false&$select=Title,ItemCount';
    return this.context.spHttpClient.get(apiUrl, SPHttpClient.configurations.v1)
      .then(response => response.json());//functon(response){return response.json();}
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: "Webpart Title"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
