export interface DynamicKeys {
  [key: string]: string;
}

export interface MetadataInformation {
  title: string;
  description: string;
  banner?: string;
  color?: string;
  isItWordpress?: boolean;
  wordpressVersion?: string;
  additional?: DynamicKeys;
}
