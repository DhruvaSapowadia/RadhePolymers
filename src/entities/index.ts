/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: capabilities
 * Interface for Capabilities
 */
export interface Capabilities {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  capabilityTitle?: string;
  /** @wixFieldType text */
  processDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  representativeImage?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType boolean */
  isFeatured?: boolean;
}


/**
 * Collection ID: products
 * Interface for Products
 */
export interface Products {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  productName?: string;
  /** @wixFieldType text */
  productType?: string;
  /** @wixFieldType text */
  sizeDimensions?: string;
  /** @wixFieldType text */
  technicalSpecifications?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  productImage?: string;
}
