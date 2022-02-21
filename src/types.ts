export type ValidationMessage = {
  type: string;
  subType: string;
  firstLine: number;
  lastLine: number;
  firstColumn: number;
  lastColumn: number;
  message: string;
  extract?: string;
  hiliteStart: number;
  hiliteLength: number;
}