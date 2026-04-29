
import { Page, expect } from '@playwright/test';
import { UIActions } from '../../Utils/UiActions';
import path from 'path';

export class FileUpload2{
  private ui: UIActions;

  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }

  async fileuploadcommon() {

 // ===== Open Browse =====
     await this.ui.clickByLocator('#browseButton');
  
      // ===== File Path =====
 const filePath = path.join(
   process.cwd(),
   'tests',
   'Uploadfile',
   'sampletest.pdf'
 );
 // ===== Upload File =====
     await this.ui.uploadFile(
       '#filebrowseButton input[type="file"]',
       filePath
     );
  
     // ===== Click Upload Button =====
     await this.ui.clickByLocator(
       '#filebrowseButton button:has-text("Upload")'
     );
    };
  }