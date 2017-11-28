interface UploadDataModel {
  uploadInProgress: boolean;
  progress: number;
  error: boolean;
  errorMsg: string;
}

interface UploadModel {
  [key: string]: UploadDataModel;
}

// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop

@Component({
  selector: 'create-project-graphics',
  providers: [],
  styleUrls: ['./create-project-graphics.component.scss'],
  templateUrl: './create-project-graphics.component.html'
})
export class CreateProjectGraphicsComponent implements OnInit, OnDestroy {
  public graphics: GraphicsModel;

  // Color picker variables
  // --------------------
  public color: string;
  // ----------------------------------------------------

  // File dropping variables
  // --------------------
  public upload: UploadModel = {
    loginPanelLogo: {
      uploadInProgress: false,
      progress: 0,
      error: false,
      errorMsg: ''
    },
    menuLogo: {
      uploadInProgress: false,
      progress: 0,
      error: false,
      errorMsg: ''
    },