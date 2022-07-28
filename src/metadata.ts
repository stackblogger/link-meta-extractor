export interface MetadataInformation {
  title: string;
  description: string;
  banner?: string;
  color?: string;
  isItWordpress?: boolean;
  wordpressVersion?: string;
  extraFields?: DynamicKeys;
}

export interface DynamicKeys {
  [key: string]: string;
}
