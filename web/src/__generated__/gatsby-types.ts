/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};











type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};


type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  readonly childMdx: Maybe<Mdx>;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___frontmatter___path = 'childMarkdownRemark.frontmatter.path',
  childMarkdownRemark___frontmatter___date = 'childMarkdownRemark.frontmatter.date',
  childMarkdownRemark___frontmatter___tags = 'childMarkdownRemark.frontmatter.tags',
  childMarkdownRemark___frontmatter___draft = 'childMarkdownRemark.frontmatter.draft',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark.fileAbsolutePath',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type',
  childMdx___rawBody = 'childMdx.rawBody',
  childMdx___fileAbsolutePath = 'childMdx.fileAbsolutePath',
  childMdx___frontmatter___title = 'childMdx.frontmatter.title',
  childMdx___frontmatter___path = 'childMdx.frontmatter.path',
  childMdx___frontmatter___date = 'childMdx.frontmatter.date',
  childMdx___frontmatter___tags = 'childMdx.frontmatter.tags',
  childMdx___frontmatter___draft = 'childMdx.frontmatter.draft',
  childMdx___body = 'childMdx.body',
  childMdx___excerpt = 'childMdx.excerpt',
  childMdx___headings = 'childMdx.headings',
  childMdx___headings___value = 'childMdx.headings.value',
  childMdx___headings___depth = 'childMdx.headings.depth',
  childMdx___html = 'childMdx.html',
  childMdx___mdxAST = 'childMdx.mdxAST',
  childMdx___tableOfContents = 'childMdx.tableOfContents',
  childMdx___timeToRead = 'childMdx.timeToRead',
  childMdx___wordCount___paragraphs = 'childMdx.wordCount.paragraphs',
  childMdx___wordCount___sentences = 'childMdx.wordCount.sentences',
  childMdx___wordCount___words = 'childMdx.wordCount.words',
  childMdx___id = 'childMdx.id',
  childMdx___parent___id = 'childMdx.parent.id',
  childMdx___parent___parent___id = 'childMdx.parent.parent.id',
  childMdx___parent___parent___children = 'childMdx.parent.parent.children',
  childMdx___parent___children = 'childMdx.parent.children',
  childMdx___parent___children___id = 'childMdx.parent.children.id',
  childMdx___parent___children___children = 'childMdx.parent.children.children',
  childMdx___parent___internal___content = 'childMdx.parent.internal.content',
  childMdx___parent___internal___contentDigest = 'childMdx.parent.internal.contentDigest',
  childMdx___parent___internal___description = 'childMdx.parent.internal.description',
  childMdx___parent___internal___fieldOwners = 'childMdx.parent.internal.fieldOwners',
  childMdx___parent___internal___ignoreType = 'childMdx.parent.internal.ignoreType',
  childMdx___parent___internal___mediaType = 'childMdx.parent.internal.mediaType',
  childMdx___parent___internal___owner = 'childMdx.parent.internal.owner',
  childMdx___parent___internal___type = 'childMdx.parent.internal.type',
  childMdx___children = 'childMdx.children',
  childMdx___children___id = 'childMdx.children.id',
  childMdx___children___parent___id = 'childMdx.children.parent.id',
  childMdx___children___parent___children = 'childMdx.children.parent.children',
  childMdx___children___children = 'childMdx.children.children',
  childMdx___children___children___id = 'childMdx.children.children.id',
  childMdx___children___children___children = 'childMdx.children.children.children',
  childMdx___children___internal___content = 'childMdx.children.internal.content',
  childMdx___children___internal___contentDigest = 'childMdx.children.internal.contentDigest',
  childMdx___children___internal___description = 'childMdx.children.internal.description',
  childMdx___children___internal___fieldOwners = 'childMdx.children.internal.fieldOwners',
  childMdx___children___internal___ignoreType = 'childMdx.children.internal.ignoreType',
  childMdx___children___internal___mediaType = 'childMdx.children.internal.mediaType',
  childMdx___children___internal___owner = 'childMdx.children.internal.owner',
  childMdx___children___internal___type = 'childMdx.children.internal.type',
  childMdx___internal___content = 'childMdx.internal.content',
  childMdx___internal___contentDigest = 'childMdx.internal.contentDigest',
  childMdx___internal___description = 'childMdx.internal.description',
  childMdx___internal___fieldOwners = 'childMdx.internal.fieldOwners',
  childMdx___internal___ignoreType = 'childMdx.internal.ignoreType',
  childMdx___internal___mediaType = 'childMdx.internal.mediaType',
  childMdx___internal___owner = 'childMdx.internal.owner',
  childMdx___internal___type = 'childMdx.internal.type'
}

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

enum HeadingsMdx {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Maybe<Scalars['Int']>;
  readonly presentationHeight: Maybe<Scalars['Int']>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Maybe<Scalars['Int']>;
  readonly presentationHeight: Maybe<Scalars['Int']>;
};

type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

type MarkdownHeading = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly fileAbsolutePath: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

enum MarkdownRemarkFieldsEnum {
  id = 'id',
  frontmatter___title = 'frontmatter.title',
  frontmatter___path = 'frontmatter.path',
  frontmatter___date = 'frontmatter.date',
  frontmatter___tags = 'frontmatter.tags',
  frontmatter___draft = 'frontmatter.draft',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  html = 'html',
  htmlAst = 'htmlAst',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___value = 'headings.value',
  headings___depth = 'headings.depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount.paragraphs',
  wordCount___sentences = 'wordCount.sentences',
  wordCount___words = 'wordCount.words',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly draft: Maybe<Scalars['Boolean']>;
};


type MarkdownRemarkFrontmatter_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly draft: Maybe<BooleanQueryOperatorInput>;
};

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type Mdx = Node & {
  readonly rawBody: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: Maybe<MdxFrontmatter>;
  readonly body: Scalars['String'];
  readonly excerpt: Scalars['String'];
  readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly mdxAST: Maybe<Scalars['JSON']>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MdxWordCount>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Mdx_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type Mdx_headingsArgs = {
  depth: Maybe<HeadingsMdx>;
};


type Mdx_tableOfContentsArgs = {
  maxDepth: Maybe<Scalars['Int']>;
};

type MdxConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};


type MdxConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

enum MdxFieldsEnum {
  rawBody = 'rawBody',
  fileAbsolutePath = 'fileAbsolutePath',
  frontmatter___title = 'frontmatter.title',
  frontmatter___path = 'frontmatter.path',
  frontmatter___date = 'frontmatter.date',
  frontmatter___tags = 'frontmatter.tags',
  frontmatter___draft = 'frontmatter.draft',
  body = 'body',
  excerpt = 'excerpt',
  headings = 'headings',
  headings___value = 'headings.value',
  headings___depth = 'headings.depth',
  html = 'html',
  mdxAST = 'mdxAST',
  tableOfContents = 'tableOfContents',
  timeToRead = 'timeToRead',
  wordCount___paragraphs = 'wordCount.paragraphs',
  wordCount___sentences = 'wordCount.sentences',
  wordCount___words = 'wordCount.words',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type MdxFilterInput = {
  readonly rawBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MdxFrontmatterFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly mdxAST: Maybe<JSONQueryOperatorInput>;
  readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly wordCount: Maybe<MdxWordCountFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MdxFrontmatter = {
  readonly title: Scalars['String'];
  readonly path: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly draft: Maybe<Scalars['Boolean']>;
};


type MdxFrontmatter_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MdxFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly draft: Maybe<BooleanQueryOperatorInput>;
};

type MdxGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MdxHeadingMdx = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MdxHeadingMdxFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

type MdxSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MdxWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MdxWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
};

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly mdx: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly strapiArticleContent: Maybe<StrapiArticleContent>;
  readonly allStrapiArticleContent: StrapiArticleContentConnection;
  readonly strapiUser: Maybe<StrapiUser>;
  readonly allStrapiUser: StrapiUserConnection;
  readonly strapiArticle: Maybe<StrapiArticle>;
  readonly allStrapiArticle: StrapiArticleConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  childMdx: Maybe<MdxFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_mdxArgs = {
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  body: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  mdxAST: Maybe<JSONQueryOperatorInput>;
  tableOfContents: Maybe<JSONQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  sort: Maybe<MdxSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiArticleContentArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  childMdx: Maybe<MdxFilterInput>;
};


type Query_allStrapiArticleContentArgs = {
  filter: Maybe<StrapiArticleContentFilterInput>;
  sort: Maybe<StrapiArticleContentSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiUserArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  username: Maybe<StringQueryOperatorInput>;
  email: Maybe<StringQueryOperatorInput>;
  provider: Maybe<StringQueryOperatorInput>;
  confirmed: Maybe<BooleanQueryOperatorInput>;
  blocked: Maybe<BooleanQueryOperatorInput>;
  role: Maybe<StrapiUserRoleFilterInput>;
  created_at: Maybe<DateQueryOperatorInput>;
  updated_at: Maybe<DateQueryOperatorInput>;
  first_name: Maybe<StringQueryOperatorInput>;
  last_name: Maybe<StringQueryOperatorInput>;
  avatar: Maybe<FileFilterInput>;
  articles: Maybe<StrapiUserArticlesFilterListInput>;
  strapiId: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiUserArgs = {
  filter: Maybe<StrapiUserFilterInput>;
  sort: Maybe<StrapiUserSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiArticleArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  Introduction: Maybe<StringQueryOperatorInput>;
  Content: Maybe<StringQueryOperatorInput>;
  Title: Maybe<StringQueryOperatorInput>;
  CreatedAt: Maybe<DateQueryOperatorInput>;
  Author: Maybe<StrapiArticleAuthorFilterInput>;
  IsEnabled: Maybe<BooleanQueryOperatorInput>;
  created_at: Maybe<DateQueryOperatorInput>;
  updated_at: Maybe<DateQueryOperatorInput>;
  Logo: Maybe<FileFilterInput>;
  strapiId: Maybe<IntQueryOperatorInput>;
  childStrapiArticleContent: Maybe<StrapiArticleContentFilterInput>;
};


type Query_allStrapiArticleArgs = {
  filter: Maybe<StrapiArticleFilterInput>;
  sort: Maybe<StrapiArticleSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  buildTime = 'buildTime'
}

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata.title',
  siteMetadata___author = 'siteMetadata.author',
  siteMetadata___description = 'siteMetadata.description',
  siteMetadata___siteUrl = 'siteMetadata.siteUrl',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageContext = {
  readonly itemTotal: Maybe<Scalars['Int']>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly pageTotal: Maybe<Scalars['Int']>;
  readonly prefix: Maybe<Scalars['String']>;
  readonly skip: Maybe<Scalars['Int']>;
  readonly tag: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type SitePageContextFilterInput = {
  readonly itemTotal: Maybe<IntQueryOperatorInput>;
  readonly limit: Maybe<IntQueryOperatorInput>;
  readonly page: Maybe<IntQueryOperatorInput>;
  readonly pageTotal: Maybe<IntQueryOperatorInput>;
  readonly prefix: Maybe<StringQueryOperatorInput>;
  readonly skip: Maybe<IntQueryOperatorInput>;
  readonly tag: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___itemTotal = 'context.itemTotal',
  context___limit = 'context.limit',
  context___page = 'context.page',
  context___pageTotal = 'context.pageTotal',
  context___prefix = 'context.prefix',
  context___skip = 'context.skip',
  context___tag = 'context.tag',
  context___id = 'context.id',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___plugins = 'pluginCreator.pluginOptions.plugins',
  pluginCreator___pluginOptions___plugins___resolve = 'pluginCreator.pluginOptions.plugins.resolve',
  pluginCreator___pluginOptions___plugins___id = 'pluginCreator.pluginOptions.plugins.id',
  pluginCreator___pluginOptions___plugins___name = 'pluginCreator.pluginOptions.plugins.name',
  pluginCreator___pluginOptions___plugins___version = 'pluginCreator.pluginOptions.plugins.version',
  pluginCreator___pluginOptions___plugins___nodeAPIs = 'pluginCreator.pluginOptions.plugins.nodeAPIs',
  pluginCreator___pluginOptions___plugins___browserAPIs = 'pluginCreator.pluginOptions.plugins.browserAPIs',
  pluginCreator___pluginOptions___plugins___pluginFilepath = 'pluginCreator.pluginOptions.plugins.pluginFilepath',
  pluginCreator___pluginOptions___pathToConfigModule = 'pluginCreator.pluginOptions.pathToConfigModule',
  pluginCreator___pluginOptions___omitGoogleFont = 'pluginCreator.pluginOptions.omitGoogleFont',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___color = 'pluginCreator.pluginOptions.color',
  pluginCreator___pluginOptions___showSpinner = 'pluginCreator.pluginOptions.showSpinner',
  pluginCreator___pluginOptions___dashes = 'pluginCreator.pluginOptions.dashes',
  pluginCreator___pluginOptions___classPrefix = 'pluginCreator.pluginOptions.classPrefix',
  pluginCreator___pluginOptions___inlineCodeMarker___tsx = 'pluginCreator.pluginOptions.inlineCodeMarker.tsx',
  pluginCreator___pluginOptions___maxWidth = 'pluginCreator.pluginOptions.maxWidth',
  pluginCreator___pluginOptions___apiURL = 'pluginCreator.pluginOptions.apiURL',
  pluginCreator___pluginOptions___contentTypes = 'pluginCreator.pluginOptions.contentTypes',
  pluginCreator___pluginOptions___queryLimit = 'pluginCreator.pluginOptions.queryLimit',
  pluginCreator___pluginOptions___extensions = 'pluginCreator.pluginOptions.extensions',
  pluginCreator___pluginOptions___languages = 'pluginCreator.pluginOptions.languages',
  pluginCreator___pluginOptions___languages___name = 'pluginCreator.pluginOptions.languages.name',
  pluginCreator___pluginOptions___languages___customEntries = 'pluginCreator.pluginOptions.languages.customEntries',
  pluginCreator___pluginOptions___fields = 'pluginCreator.pluginOptions.fields',
  pluginCreator___pluginOptions___fields___name = 'pluginCreator.pluginOptions.fields.name',
  pluginCreator___pluginOptions___fields___store = 'pluginCreator.pluginOptions.fields.store',
  pluginCreator___pluginOptions___feeds = 'pluginCreator.pluginOptions.feeds',
  pluginCreator___pluginOptions___feeds___title = 'pluginCreator.pluginOptions.feeds.title',
  pluginCreator___pluginOptions___feeds___query = 'pluginCreator.pluginOptions.feeds.query',
  pluginCreator___pluginOptions___feeds___output = 'pluginCreator.pluginOptions.feeds.output',
  pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator.pluginOptions.background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator.pluginOptions.theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
  pluginCreator___pluginOptions___icons = 'pluginCreator.pluginOptions.icons',
  pluginCreator___pluginOptions___icons___src = 'pluginCreator.pluginOptions.icons.src',
  pluginCreator___pluginOptions___icons___sizes = 'pluginCreator.pluginOptions.icons.sizes',
  pluginCreator___pluginOptions___icons___type = 'pluginCreator.pluginOptions.icons.type',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions.plugins',
  pluginOptions___plugins___resolve = 'pluginOptions.plugins.resolve',
  pluginOptions___plugins___id = 'pluginOptions.plugins.id',
  pluginOptions___plugins___name = 'pluginOptions.plugins.name',
  pluginOptions___plugins___version = 'pluginOptions.plugins.version',
  pluginOptions___plugins___pluginOptions___dashes = 'pluginOptions.plugins.pluginOptions.dashes',
  pluginOptions___plugins___pluginOptions___classPrefix = 'pluginOptions.plugins.pluginOptions.classPrefix',
  pluginOptions___plugins___pluginOptions___maxWidth = 'pluginOptions.plugins.pluginOptions.maxWidth',
  pluginOptions___plugins___nodeAPIs = 'pluginOptions.plugins.nodeAPIs',
  pluginOptions___plugins___browserAPIs = 'pluginOptions.plugins.browserAPIs',
  pluginOptions___plugins___pluginFilepath = 'pluginOptions.plugins.pluginFilepath',
  pluginOptions___pathToConfigModule = 'pluginOptions.pathToConfigModule',
  pluginOptions___omitGoogleFont = 'pluginOptions.omitGoogleFont',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___color = 'pluginOptions.color',
  pluginOptions___showSpinner = 'pluginOptions.showSpinner',
  pluginOptions___dashes = 'pluginOptions.dashes',
  pluginOptions___classPrefix = 'pluginOptions.classPrefix',
  pluginOptions___inlineCodeMarker___tsx = 'pluginOptions.inlineCodeMarker.tsx',
  pluginOptions___maxWidth = 'pluginOptions.maxWidth',
  pluginOptions___apiURL = 'pluginOptions.apiURL',
  pluginOptions___contentTypes = 'pluginOptions.contentTypes',
  pluginOptions___queryLimit = 'pluginOptions.queryLimit',
  pluginOptions___extensions = 'pluginOptions.extensions',
  pluginOptions___languages = 'pluginOptions.languages',
  pluginOptions___languages___name = 'pluginOptions.languages.name',
  pluginOptions___languages___customEntries = 'pluginOptions.languages.customEntries',
  pluginOptions___languages___customEntries___title = 'pluginOptions.languages.customEntries.title',
  pluginOptions___languages___customEntries___content = 'pluginOptions.languages.customEntries.content',
  pluginOptions___languages___customEntries___path = 'pluginOptions.languages.customEntries.path',
  pluginOptions___fields = 'pluginOptions.fields',
  pluginOptions___fields___name = 'pluginOptions.fields.name',
  pluginOptions___fields___store = 'pluginOptions.fields.store',
  pluginOptions___fields___attributes___boost = 'pluginOptions.fields.attributes.boost',
  pluginOptions___feeds = 'pluginOptions.feeds',
  pluginOptions___feeds___title = 'pluginOptions.feeds.title',
  pluginOptions___feeds___query = 'pluginOptions.feeds.query',
  pluginOptions___feeds___output = 'pluginOptions.feeds.output',
  pluginOptions___short_name = 'pluginOptions.short_name',
  pluginOptions___start_url = 'pluginOptions.start_url',
  pluginOptions___background_color = 'pluginOptions.background_color',
  pluginOptions___theme_color = 'pluginOptions.theme_color',
  pluginOptions___display = 'pluginOptions.display',
  pluginOptions___icons = 'pluginOptions.icons',
  pluginOptions___icons___src = 'pluginOptions.icons.src',
  pluginOptions___icons___sizes = 'pluginOptions.icons.sizes',
  pluginOptions___icons___type = 'pluginOptions.icons.type',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
  readonly pathToConfigModule: Maybe<Scalars['String']>;
  readonly omitGoogleFont: Maybe<Scalars['Boolean']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly color: Maybe<Scalars['String']>;
  readonly showSpinner: Maybe<Scalars['Boolean']>;
  readonly dashes: Maybe<Scalars['String']>;
  readonly classPrefix: Maybe<Scalars['String']>;
  readonly inlineCodeMarker: Maybe<SitePluginPluginOptionsInlineCodeMarker>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly apiURL: Maybe<Scalars['String']>;
  readonly contentTypes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly queryLimit: Maybe<Scalars['Int']>;
  readonly extensions: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly languages: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsLanguages>>>;
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsFields>>>;
  readonly feeds: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsFeeds>>>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icons: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsIcons>>>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsFeeds = {
  readonly title: Maybe<Scalars['String']>;
  readonly query: Maybe<Scalars['String']>;
  readonly output: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsFeedsFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsFeedsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

type SitePluginPluginOptionsFields = {
  readonly name: Maybe<Scalars['String']>;
  readonly store: Maybe<Scalars['Boolean']>;
  readonly attributes: Maybe<SitePluginPluginOptionsFieldsAttributes>;
};

type SitePluginPluginOptionsFieldsAttributes = {
  readonly boost: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsFieldsAttributesFilterInput = {
  readonly boost: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsFieldsFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly store: Maybe<BooleanQueryOperatorInput>;
  readonly attributes: Maybe<SitePluginPluginOptionsFieldsAttributesFilterInput>;
};

type SitePluginPluginOptionsFieldsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsFieldsFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  readonly pathToConfigModule: Maybe<StringQueryOperatorInput>;
  readonly omitGoogleFont: Maybe<BooleanQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly showSpinner: Maybe<BooleanQueryOperatorInput>;
  readonly dashes: Maybe<StringQueryOperatorInput>;
  readonly classPrefix: Maybe<StringQueryOperatorInput>;
  readonly inlineCodeMarker: Maybe<SitePluginPluginOptionsInlineCodeMarkerFilterInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly apiURL: Maybe<StringQueryOperatorInput>;
  readonly contentTypes: Maybe<StringQueryOperatorInput>;
  readonly queryLimit: Maybe<IntQueryOperatorInput>;
  readonly extensions: Maybe<StringQueryOperatorInput>;
  readonly languages: Maybe<SitePluginPluginOptionsLanguagesFilterListInput>;
  readonly fields: Maybe<SitePluginPluginOptionsFieldsFilterListInput>;
  readonly feeds: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icons: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsIcons = {
  readonly src: Maybe<Scalars['String']>;
  readonly sizes: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsIconsFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsIconsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

type SitePluginPluginOptionsInlineCodeMarker = {
  readonly tsx: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsInlineCodeMarkerFilterInput = {
  readonly tsx: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsLanguages = {
  readonly name: Maybe<Scalars['String']>;
  readonly customEntries: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsLanguagesCustomEntries>>>;
};

type SitePluginPluginOptionsLanguagesCustomEntries = {
  readonly title: Maybe<Scalars['String']>;
  readonly content: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsLanguagesCustomEntriesFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsLanguagesCustomEntriesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsLanguagesCustomEntriesFilterInput>;
};

type SitePluginPluginOptionsLanguagesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly customEntries: Maybe<SitePluginPluginOptionsLanguagesCustomEntriesFilterListInput>;
};

type SitePluginPluginOptionsLanguagesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsLanguagesFilterInput>;
};

type SitePluginPluginOptionsPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

type SitePluginPluginOptionsPluginsPluginOptions = {
  readonly dashes: Maybe<Scalars['String']>;
  readonly classPrefix: Maybe<Scalars['String']>;
  readonly inlineCodeMarker: Maybe<SitePluginPluginOptionsPluginsPluginOptionsInlineCodeMarker>;
  readonly maxWidth: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly dashes: Maybe<StringQueryOperatorInput>;
  readonly classPrefix: Maybe<StringQueryOperatorInput>;
  readonly inlineCodeMarker: Maybe<SitePluginPluginOptionsPluginsPluginOptionsInlineCodeMarkerFilterInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsPluginOptionsInlineCodeMarker = {
  readonly tsx: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginsPluginOptionsInlineCodeMarkerFilterInput = {
  readonly tsx: Maybe<StringQueryOperatorInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

type StrapiArticle = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly Introduction: Maybe<Scalars['String']>;
  readonly Content: Maybe<Scalars['String']>;
  readonly Title: Maybe<Scalars['String']>;
  readonly CreatedAt: Maybe<Scalars['Date']>;
  readonly Author: Maybe<StrapiArticleAuthor>;
  readonly IsEnabled: Maybe<Scalars['Boolean']>;
  readonly created_at: Maybe<Scalars['Date']>;
  readonly updated_at: Maybe<Scalars['Date']>;
  readonly Logo: Maybe<File>;
  readonly strapiId: Maybe<Scalars['Int']>;
  readonly childStrapiArticleContent: Maybe<StrapiArticleContent>;
};


type StrapiArticle_CreatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StrapiArticle_created_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StrapiArticle_updated_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type StrapiArticleAuthor = {
  readonly id: Maybe<Scalars['Int']>;
  readonly username: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly provider: Maybe<Scalars['String']>;
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly blocked: Maybe<Scalars['Boolean']>;
  readonly role: Maybe<Scalars['Int']>;
  readonly created_at: Maybe<Scalars['Date']>;
  readonly updated_at: Maybe<Scalars['Date']>;
  readonly first_name: Maybe<Scalars['String']>;
  readonly last_name: Maybe<Scalars['String']>;
  readonly avatar: Maybe<File>;
};


type StrapiArticleAuthor_created_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StrapiArticleAuthor_updated_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type StrapiArticleAuthorFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly username: Maybe<StringQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly provider: Maybe<StringQueryOperatorInput>;
  readonly confirmed: Maybe<BooleanQueryOperatorInput>;
  readonly blocked: Maybe<BooleanQueryOperatorInput>;
  readonly role: Maybe<IntQueryOperatorInput>;
  readonly created_at: Maybe<DateQueryOperatorInput>;
  readonly updated_at: Maybe<DateQueryOperatorInput>;
  readonly first_name: Maybe<StringQueryOperatorInput>;
  readonly last_name: Maybe<StringQueryOperatorInput>;
  readonly avatar: Maybe<FileFilterInput>;
};

type StrapiArticleConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StrapiArticleEdge>;
  readonly nodes: ReadonlyArray<StrapiArticle>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<StrapiArticleGroupConnection>;
};


type StrapiArticleConnection_distinctArgs = {
  field: StrapiArticleFieldsEnum;
};


type StrapiArticleConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: StrapiArticleFieldsEnum;
};

type StrapiArticleContent = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  readonly childMdx: Maybe<Mdx>;
};

type StrapiArticleContentConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StrapiArticleContentEdge>;
  readonly nodes: ReadonlyArray<StrapiArticleContent>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<StrapiArticleContentGroupConnection>;
};


type StrapiArticleContentConnection_distinctArgs = {
  field: StrapiArticleContentFieldsEnum;
};


type StrapiArticleContentConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: StrapiArticleContentFieldsEnum;
};

type StrapiArticleContentEdge = {
  readonly next: Maybe<StrapiArticleContent>;
  readonly node: StrapiArticleContent;
  readonly previous: Maybe<StrapiArticleContent>;
};

enum StrapiArticleContentFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___frontmatter___path = 'childMarkdownRemark.frontmatter.path',
  childMarkdownRemark___frontmatter___date = 'childMarkdownRemark.frontmatter.date',
  childMarkdownRemark___frontmatter___tags = 'childMarkdownRemark.frontmatter.tags',
  childMarkdownRemark___frontmatter___draft = 'childMarkdownRemark.frontmatter.draft',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark.fileAbsolutePath',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type',
  childMdx___rawBody = 'childMdx.rawBody',
  childMdx___fileAbsolutePath = 'childMdx.fileAbsolutePath',
  childMdx___frontmatter___title = 'childMdx.frontmatter.title',
  childMdx___frontmatter___path = 'childMdx.frontmatter.path',
  childMdx___frontmatter___date = 'childMdx.frontmatter.date',
  childMdx___frontmatter___tags = 'childMdx.frontmatter.tags',
  childMdx___frontmatter___draft = 'childMdx.frontmatter.draft',
  childMdx___body = 'childMdx.body',
  childMdx___excerpt = 'childMdx.excerpt',
  childMdx___headings = 'childMdx.headings',
  childMdx___headings___value = 'childMdx.headings.value',
  childMdx___headings___depth = 'childMdx.headings.depth',
  childMdx___html = 'childMdx.html',
  childMdx___mdxAST = 'childMdx.mdxAST',
  childMdx___tableOfContents = 'childMdx.tableOfContents',
  childMdx___timeToRead = 'childMdx.timeToRead',
  childMdx___wordCount___paragraphs = 'childMdx.wordCount.paragraphs',
  childMdx___wordCount___sentences = 'childMdx.wordCount.sentences',
  childMdx___wordCount___words = 'childMdx.wordCount.words',
  childMdx___id = 'childMdx.id',
  childMdx___parent___id = 'childMdx.parent.id',
  childMdx___parent___parent___id = 'childMdx.parent.parent.id',
  childMdx___parent___parent___children = 'childMdx.parent.parent.children',
  childMdx___parent___children = 'childMdx.parent.children',
  childMdx___parent___children___id = 'childMdx.parent.children.id',
  childMdx___parent___children___children = 'childMdx.parent.children.children',
  childMdx___parent___internal___content = 'childMdx.parent.internal.content',
  childMdx___parent___internal___contentDigest = 'childMdx.parent.internal.contentDigest',
  childMdx___parent___internal___description = 'childMdx.parent.internal.description',
  childMdx___parent___internal___fieldOwners = 'childMdx.parent.internal.fieldOwners',
  childMdx___parent___internal___ignoreType = 'childMdx.parent.internal.ignoreType',
  childMdx___parent___internal___mediaType = 'childMdx.parent.internal.mediaType',
  childMdx___parent___internal___owner = 'childMdx.parent.internal.owner',
  childMdx___parent___internal___type = 'childMdx.parent.internal.type',
  childMdx___children = 'childMdx.children',
  childMdx___children___id = 'childMdx.children.id',
  childMdx___children___parent___id = 'childMdx.children.parent.id',
  childMdx___children___parent___children = 'childMdx.children.parent.children',
  childMdx___children___children = 'childMdx.children.children',
  childMdx___children___children___id = 'childMdx.children.children.id',
  childMdx___children___children___children = 'childMdx.children.children.children',
  childMdx___children___internal___content = 'childMdx.children.internal.content',
  childMdx___children___internal___contentDigest = 'childMdx.children.internal.contentDigest',
  childMdx___children___internal___description = 'childMdx.children.internal.description',
  childMdx___children___internal___fieldOwners = 'childMdx.children.internal.fieldOwners',
  childMdx___children___internal___ignoreType = 'childMdx.children.internal.ignoreType',
  childMdx___children___internal___mediaType = 'childMdx.children.internal.mediaType',
  childMdx___children___internal___owner = 'childMdx.children.internal.owner',
  childMdx___children___internal___type = 'childMdx.children.internal.type',
  childMdx___internal___content = 'childMdx.internal.content',
  childMdx___internal___contentDigest = 'childMdx.internal.contentDigest',
  childMdx___internal___description = 'childMdx.internal.description',
  childMdx___internal___fieldOwners = 'childMdx.internal.fieldOwners',
  childMdx___internal___ignoreType = 'childMdx.internal.ignoreType',
  childMdx___internal___mediaType = 'childMdx.internal.mediaType',
  childMdx___internal___owner = 'childMdx.internal.owner',
  childMdx___internal___type = 'childMdx.internal.type'
}

type StrapiArticleContentFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
};

type StrapiArticleContentGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StrapiArticleContentEdge>;
  readonly nodes: ReadonlyArray<StrapiArticleContent>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type StrapiArticleContentSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<StrapiArticleContentFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type StrapiArticleEdge = {
  readonly next: Maybe<StrapiArticle>;
  readonly node: StrapiArticle;
  readonly previous: Maybe<StrapiArticle>;
};

enum StrapiArticleFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  Introduction = 'Introduction',
  Content = 'Content',
  Title = 'Title',
  CreatedAt = 'CreatedAt',
  Author___id = 'Author.id',
  Author___username = 'Author.username',
  Author___email = 'Author.email',
  Author___provider = 'Author.provider',
  Author___confirmed = 'Author.confirmed',
  Author___blocked = 'Author.blocked',
  Author___role = 'Author.role',
  Author___created_at = 'Author.created_at',
  Author___updated_at = 'Author.updated_at',
  Author___first_name = 'Author.first_name',
  Author___last_name = 'Author.last_name',
  Author___avatar___sourceInstanceName = 'Author.avatar.sourceInstanceName',
  Author___avatar___absolutePath = 'Author.avatar.absolutePath',
  Author___avatar___relativePath = 'Author.avatar.relativePath',
  Author___avatar___extension = 'Author.avatar.extension',
  Author___avatar___size = 'Author.avatar.size',
  Author___avatar___prettySize = 'Author.avatar.prettySize',
  Author___avatar___modifiedTime = 'Author.avatar.modifiedTime',
  Author___avatar___accessTime = 'Author.avatar.accessTime',
  Author___avatar___changeTime = 'Author.avatar.changeTime',
  Author___avatar___birthTime = 'Author.avatar.birthTime',
  Author___avatar___root = 'Author.avatar.root',
  Author___avatar___dir = 'Author.avatar.dir',
  Author___avatar___base = 'Author.avatar.base',
  Author___avatar___ext = 'Author.avatar.ext',
  Author___avatar___name = 'Author.avatar.name',
  Author___avatar___relativeDirectory = 'Author.avatar.relativeDirectory',
  Author___avatar___dev = 'Author.avatar.dev',
  Author___avatar___mode = 'Author.avatar.mode',
  Author___avatar___nlink = 'Author.avatar.nlink',
  Author___avatar___uid = 'Author.avatar.uid',
  Author___avatar___gid = 'Author.avatar.gid',
  Author___avatar___rdev = 'Author.avatar.rdev',
  Author___avatar___ino = 'Author.avatar.ino',
  Author___avatar___atimeMs = 'Author.avatar.atimeMs',
  Author___avatar___mtimeMs = 'Author.avatar.mtimeMs',
  Author___avatar___ctimeMs = 'Author.avatar.ctimeMs',
  Author___avatar___atime = 'Author.avatar.atime',
  Author___avatar___mtime = 'Author.avatar.mtime',
  Author___avatar___ctime = 'Author.avatar.ctime',
  Author___avatar___birthtime = 'Author.avatar.birthtime',
  Author___avatar___birthtimeMs = 'Author.avatar.birthtimeMs',
  Author___avatar___blksize = 'Author.avatar.blksize',
  Author___avatar___blocks = 'Author.avatar.blocks',
  Author___avatar___publicURL = 'Author.avatar.publicURL',
  Author___avatar___childImageSharp___id = 'Author.avatar.childImageSharp.id',
  Author___avatar___childImageSharp___children = 'Author.avatar.childImageSharp.children',
  Author___avatar___id = 'Author.avatar.id',
  Author___avatar___parent___id = 'Author.avatar.parent.id',
  Author___avatar___parent___children = 'Author.avatar.parent.children',
  Author___avatar___children = 'Author.avatar.children',
  Author___avatar___children___id = 'Author.avatar.children.id',
  Author___avatar___children___children = 'Author.avatar.children.children',
  Author___avatar___internal___content = 'Author.avatar.internal.content',
  Author___avatar___internal___contentDigest = 'Author.avatar.internal.contentDigest',
  Author___avatar___internal___description = 'Author.avatar.internal.description',
  Author___avatar___internal___fieldOwners = 'Author.avatar.internal.fieldOwners',
  Author___avatar___internal___ignoreType = 'Author.avatar.internal.ignoreType',
  Author___avatar___internal___mediaType = 'Author.avatar.internal.mediaType',
  Author___avatar___internal___owner = 'Author.avatar.internal.owner',
  Author___avatar___internal___type = 'Author.avatar.internal.type',
  Author___avatar___childMarkdownRemark___id = 'Author.avatar.childMarkdownRemark.id',
  Author___avatar___childMarkdownRemark___excerpt = 'Author.avatar.childMarkdownRemark.excerpt',
  Author___avatar___childMarkdownRemark___rawMarkdownBody = 'Author.avatar.childMarkdownRemark.rawMarkdownBody',
  Author___avatar___childMarkdownRemark___fileAbsolutePath = 'Author.avatar.childMarkdownRemark.fileAbsolutePath',
  Author___avatar___childMarkdownRemark___html = 'Author.avatar.childMarkdownRemark.html',
  Author___avatar___childMarkdownRemark___htmlAst = 'Author.avatar.childMarkdownRemark.htmlAst',
  Author___avatar___childMarkdownRemark___excerptAst = 'Author.avatar.childMarkdownRemark.excerptAst',
  Author___avatar___childMarkdownRemark___headings = 'Author.avatar.childMarkdownRemark.headings',
  Author___avatar___childMarkdownRemark___timeToRead = 'Author.avatar.childMarkdownRemark.timeToRead',
  Author___avatar___childMarkdownRemark___tableOfContents = 'Author.avatar.childMarkdownRemark.tableOfContents',
  Author___avatar___childMarkdownRemark___children = 'Author.avatar.childMarkdownRemark.children',
  Author___avatar___childMdx___rawBody = 'Author.avatar.childMdx.rawBody',
  Author___avatar___childMdx___fileAbsolutePath = 'Author.avatar.childMdx.fileAbsolutePath',
  Author___avatar___childMdx___body = 'Author.avatar.childMdx.body',
  Author___avatar___childMdx___excerpt = 'Author.avatar.childMdx.excerpt',
  Author___avatar___childMdx___headings = 'Author.avatar.childMdx.headings',
  Author___avatar___childMdx___html = 'Author.avatar.childMdx.html',
  Author___avatar___childMdx___mdxAST = 'Author.avatar.childMdx.mdxAST',
  Author___avatar___childMdx___tableOfContents = 'Author.avatar.childMdx.tableOfContents',
  Author___avatar___childMdx___timeToRead = 'Author.avatar.childMdx.timeToRead',
  Author___avatar___childMdx___id = 'Author.avatar.childMdx.id',
  Author___avatar___childMdx___children = 'Author.avatar.childMdx.children',
  IsEnabled = 'IsEnabled',
  created_at = 'created_at',
  updated_at = 'updated_at',
  Logo___sourceInstanceName = 'Logo.sourceInstanceName',
  Logo___absolutePath = 'Logo.absolutePath',
  Logo___relativePath = 'Logo.relativePath',
  Logo___extension = 'Logo.extension',
  Logo___size = 'Logo.size',
  Logo___prettySize = 'Logo.prettySize',
  Logo___modifiedTime = 'Logo.modifiedTime',
  Logo___accessTime = 'Logo.accessTime',
  Logo___changeTime = 'Logo.changeTime',
  Logo___birthTime = 'Logo.birthTime',
  Logo___root = 'Logo.root',
  Logo___dir = 'Logo.dir',
  Logo___base = 'Logo.base',
  Logo___ext = 'Logo.ext',
  Logo___name = 'Logo.name',
  Logo___relativeDirectory = 'Logo.relativeDirectory',
  Logo___dev = 'Logo.dev',
  Logo___mode = 'Logo.mode',
  Logo___nlink = 'Logo.nlink',
  Logo___uid = 'Logo.uid',
  Logo___gid = 'Logo.gid',
  Logo___rdev = 'Logo.rdev',
  Logo___ino = 'Logo.ino',
  Logo___atimeMs = 'Logo.atimeMs',
  Logo___mtimeMs = 'Logo.mtimeMs',
  Logo___ctimeMs = 'Logo.ctimeMs',
  Logo___atime = 'Logo.atime',
  Logo___mtime = 'Logo.mtime',
  Logo___ctime = 'Logo.ctime',
  Logo___birthtime = 'Logo.birthtime',
  Logo___birthtimeMs = 'Logo.birthtimeMs',
  Logo___blksize = 'Logo.blksize',
  Logo___blocks = 'Logo.blocks',
  Logo___publicURL = 'Logo.publicURL',
  Logo___childImageSharp___fixed___base64 = 'Logo.childImageSharp.fixed.base64',
  Logo___childImageSharp___fixed___tracedSVG = 'Logo.childImageSharp.fixed.tracedSVG',
  Logo___childImageSharp___fixed___aspectRatio = 'Logo.childImageSharp.fixed.aspectRatio',
  Logo___childImageSharp___fixed___width = 'Logo.childImageSharp.fixed.width',
  Logo___childImageSharp___fixed___height = 'Logo.childImageSharp.fixed.height',
  Logo___childImageSharp___fixed___src = 'Logo.childImageSharp.fixed.src',
  Logo___childImageSharp___fixed___srcSet = 'Logo.childImageSharp.fixed.srcSet',
  Logo___childImageSharp___fixed___srcWebp = 'Logo.childImageSharp.fixed.srcWebp',
  Logo___childImageSharp___fixed___srcSetWebp = 'Logo.childImageSharp.fixed.srcSetWebp',
  Logo___childImageSharp___fixed___originalName = 'Logo.childImageSharp.fixed.originalName',
  Logo___childImageSharp___resolutions___base64 = 'Logo.childImageSharp.resolutions.base64',
  Logo___childImageSharp___resolutions___tracedSVG = 'Logo.childImageSharp.resolutions.tracedSVG',
  Logo___childImageSharp___resolutions___aspectRatio = 'Logo.childImageSharp.resolutions.aspectRatio',
  Logo___childImageSharp___resolutions___width = 'Logo.childImageSharp.resolutions.width',
  Logo___childImageSharp___resolutions___height = 'Logo.childImageSharp.resolutions.height',
  Logo___childImageSharp___resolutions___src = 'Logo.childImageSharp.resolutions.src',
  Logo___childImageSharp___resolutions___srcSet = 'Logo.childImageSharp.resolutions.srcSet',
  Logo___childImageSharp___resolutions___srcWebp = 'Logo.childImageSharp.resolutions.srcWebp',
  Logo___childImageSharp___resolutions___srcSetWebp = 'Logo.childImageSharp.resolutions.srcSetWebp',
  Logo___childImageSharp___resolutions___originalName = 'Logo.childImageSharp.resolutions.originalName',
  Logo___childImageSharp___fluid___base64 = 'Logo.childImageSharp.fluid.base64',
  Logo___childImageSharp___fluid___tracedSVG = 'Logo.childImageSharp.fluid.tracedSVG',
  Logo___childImageSharp___fluid___aspectRatio = 'Logo.childImageSharp.fluid.aspectRatio',
  Logo___childImageSharp___fluid___src = 'Logo.childImageSharp.fluid.src',
  Logo___childImageSharp___fluid___srcSet = 'Logo.childImageSharp.fluid.srcSet',
  Logo___childImageSharp___fluid___srcWebp = 'Logo.childImageSharp.fluid.srcWebp',
  Logo___childImageSharp___fluid___srcSetWebp = 'Logo.childImageSharp.fluid.srcSetWebp',
  Logo___childImageSharp___fluid___sizes = 'Logo.childImageSharp.fluid.sizes',
  Logo___childImageSharp___fluid___originalImg = 'Logo.childImageSharp.fluid.originalImg',
  Logo___childImageSharp___fluid___originalName = 'Logo.childImageSharp.fluid.originalName',
  Logo___childImageSharp___fluid___presentationWidth = 'Logo.childImageSharp.fluid.presentationWidth',
  Logo___childImageSharp___fluid___presentationHeight = 'Logo.childImageSharp.fluid.presentationHeight',
  Logo___childImageSharp___sizes___base64 = 'Logo.childImageSharp.sizes.base64',
  Logo___childImageSharp___sizes___tracedSVG = 'Logo.childImageSharp.sizes.tracedSVG',
  Logo___childImageSharp___sizes___aspectRatio = 'Logo.childImageSharp.sizes.aspectRatio',
  Logo___childImageSharp___sizes___src = 'Logo.childImageSharp.sizes.src',
  Logo___childImageSharp___sizes___srcSet = 'Logo.childImageSharp.sizes.srcSet',
  Logo___childImageSharp___sizes___srcWebp = 'Logo.childImageSharp.sizes.srcWebp',
  Logo___childImageSharp___sizes___srcSetWebp = 'Logo.childImageSharp.sizes.srcSetWebp',
  Logo___childImageSharp___sizes___sizes = 'Logo.childImageSharp.sizes.sizes',
  Logo___childImageSharp___sizes___originalImg = 'Logo.childImageSharp.sizes.originalImg',
  Logo___childImageSharp___sizes___originalName = 'Logo.childImageSharp.sizes.originalName',
  Logo___childImageSharp___sizes___presentationWidth = 'Logo.childImageSharp.sizes.presentationWidth',
  Logo___childImageSharp___sizes___presentationHeight = 'Logo.childImageSharp.sizes.presentationHeight',
  Logo___childImageSharp___original___width = 'Logo.childImageSharp.original.width',
  Logo___childImageSharp___original___height = 'Logo.childImageSharp.original.height',
  Logo___childImageSharp___original___src = 'Logo.childImageSharp.original.src',
  Logo___childImageSharp___resize___src = 'Logo.childImageSharp.resize.src',
  Logo___childImageSharp___resize___tracedSVG = 'Logo.childImageSharp.resize.tracedSVG',
  Logo___childImageSharp___resize___width = 'Logo.childImageSharp.resize.width',
  Logo___childImageSharp___resize___height = 'Logo.childImageSharp.resize.height',
  Logo___childImageSharp___resize___aspectRatio = 'Logo.childImageSharp.resize.aspectRatio',
  Logo___childImageSharp___resize___originalName = 'Logo.childImageSharp.resize.originalName',
  Logo___childImageSharp___id = 'Logo.childImageSharp.id',
  Logo___childImageSharp___parent___id = 'Logo.childImageSharp.parent.id',
  Logo___childImageSharp___parent___children = 'Logo.childImageSharp.parent.children',
  Logo___childImageSharp___children = 'Logo.childImageSharp.children',
  Logo___childImageSharp___children___id = 'Logo.childImageSharp.children.id',
  Logo___childImageSharp___children___children = 'Logo.childImageSharp.children.children',
  Logo___childImageSharp___internal___content = 'Logo.childImageSharp.internal.content',
  Logo___childImageSharp___internal___contentDigest = 'Logo.childImageSharp.internal.contentDigest',
  Logo___childImageSharp___internal___description = 'Logo.childImageSharp.internal.description',
  Logo___childImageSharp___internal___fieldOwners = 'Logo.childImageSharp.internal.fieldOwners',
  Logo___childImageSharp___internal___ignoreType = 'Logo.childImageSharp.internal.ignoreType',
  Logo___childImageSharp___internal___mediaType = 'Logo.childImageSharp.internal.mediaType',
  Logo___childImageSharp___internal___owner = 'Logo.childImageSharp.internal.owner',
  Logo___childImageSharp___internal___type = 'Logo.childImageSharp.internal.type',
  Logo___id = 'Logo.id',
  Logo___parent___id = 'Logo.parent.id',
  Logo___parent___parent___id = 'Logo.parent.parent.id',
  Logo___parent___parent___children = 'Logo.parent.parent.children',
  Logo___parent___children = 'Logo.parent.children',
  Logo___parent___children___id = 'Logo.parent.children.id',
  Logo___parent___children___children = 'Logo.parent.children.children',
  Logo___parent___internal___content = 'Logo.parent.internal.content',
  Logo___parent___internal___contentDigest = 'Logo.parent.internal.contentDigest',
  Logo___parent___internal___description = 'Logo.parent.internal.description',
  Logo___parent___internal___fieldOwners = 'Logo.parent.internal.fieldOwners',
  Logo___parent___internal___ignoreType = 'Logo.parent.internal.ignoreType',
  Logo___parent___internal___mediaType = 'Logo.parent.internal.mediaType',
  Logo___parent___internal___owner = 'Logo.parent.internal.owner',
  Logo___parent___internal___type = 'Logo.parent.internal.type',
  Logo___children = 'Logo.children',
  Logo___children___id = 'Logo.children.id',
  Logo___children___parent___id = 'Logo.children.parent.id',
  Logo___children___parent___children = 'Logo.children.parent.children',
  Logo___children___children = 'Logo.children.children',
  Logo___children___children___id = 'Logo.children.children.id',
  Logo___children___children___children = 'Logo.children.children.children',
  Logo___children___internal___content = 'Logo.children.internal.content',
  Logo___children___internal___contentDigest = 'Logo.children.internal.contentDigest',
  Logo___children___internal___description = 'Logo.children.internal.description',
  Logo___children___internal___fieldOwners = 'Logo.children.internal.fieldOwners',
  Logo___children___internal___ignoreType = 'Logo.children.internal.ignoreType',
  Logo___children___internal___mediaType = 'Logo.children.internal.mediaType',
  Logo___children___internal___owner = 'Logo.children.internal.owner',
  Logo___children___internal___type = 'Logo.children.internal.type',
  Logo___internal___content = 'Logo.internal.content',
  Logo___internal___contentDigest = 'Logo.internal.contentDigest',
  Logo___internal___description = 'Logo.internal.description',
  Logo___internal___fieldOwners = 'Logo.internal.fieldOwners',
  Logo___internal___ignoreType = 'Logo.internal.ignoreType',
  Logo___internal___mediaType = 'Logo.internal.mediaType',
  Logo___internal___owner = 'Logo.internal.owner',
  Logo___internal___type = 'Logo.internal.type',
  Logo___childMarkdownRemark___id = 'Logo.childMarkdownRemark.id',
  Logo___childMarkdownRemark___frontmatter___title = 'Logo.childMarkdownRemark.frontmatter.title',
  Logo___childMarkdownRemark___frontmatter___path = 'Logo.childMarkdownRemark.frontmatter.path',
  Logo___childMarkdownRemark___frontmatter___date = 'Logo.childMarkdownRemark.frontmatter.date',
  Logo___childMarkdownRemark___frontmatter___tags = 'Logo.childMarkdownRemark.frontmatter.tags',
  Logo___childMarkdownRemark___frontmatter___draft = 'Logo.childMarkdownRemark.frontmatter.draft',
  Logo___childMarkdownRemark___excerpt = 'Logo.childMarkdownRemark.excerpt',
  Logo___childMarkdownRemark___rawMarkdownBody = 'Logo.childMarkdownRemark.rawMarkdownBody',
  Logo___childMarkdownRemark___fileAbsolutePath = 'Logo.childMarkdownRemark.fileAbsolutePath',
  Logo___childMarkdownRemark___html = 'Logo.childMarkdownRemark.html',
  Logo___childMarkdownRemark___htmlAst = 'Logo.childMarkdownRemark.htmlAst',
  Logo___childMarkdownRemark___excerptAst = 'Logo.childMarkdownRemark.excerptAst',
  Logo___childMarkdownRemark___headings = 'Logo.childMarkdownRemark.headings',
  Logo___childMarkdownRemark___headings___value = 'Logo.childMarkdownRemark.headings.value',
  Logo___childMarkdownRemark___headings___depth = 'Logo.childMarkdownRemark.headings.depth',
  Logo___childMarkdownRemark___timeToRead = 'Logo.childMarkdownRemark.timeToRead',
  Logo___childMarkdownRemark___tableOfContents = 'Logo.childMarkdownRemark.tableOfContents',
  Logo___childMarkdownRemark___wordCount___paragraphs = 'Logo.childMarkdownRemark.wordCount.paragraphs',
  Logo___childMarkdownRemark___wordCount___sentences = 'Logo.childMarkdownRemark.wordCount.sentences',
  Logo___childMarkdownRemark___wordCount___words = 'Logo.childMarkdownRemark.wordCount.words',
  Logo___childMarkdownRemark___parent___id = 'Logo.childMarkdownRemark.parent.id',
  Logo___childMarkdownRemark___parent___children = 'Logo.childMarkdownRemark.parent.children',
  Logo___childMarkdownRemark___children = 'Logo.childMarkdownRemark.children',
  Logo___childMarkdownRemark___children___id = 'Logo.childMarkdownRemark.children.id',
  Logo___childMarkdownRemark___children___children = 'Logo.childMarkdownRemark.children.children',
  Logo___childMarkdownRemark___internal___content = 'Logo.childMarkdownRemark.internal.content',
  Logo___childMarkdownRemark___internal___contentDigest = 'Logo.childMarkdownRemark.internal.contentDigest',
  Logo___childMarkdownRemark___internal___description = 'Logo.childMarkdownRemark.internal.description',
  Logo___childMarkdownRemark___internal___fieldOwners = 'Logo.childMarkdownRemark.internal.fieldOwners',
  Logo___childMarkdownRemark___internal___ignoreType = 'Logo.childMarkdownRemark.internal.ignoreType',
  Logo___childMarkdownRemark___internal___mediaType = 'Logo.childMarkdownRemark.internal.mediaType',
  Logo___childMarkdownRemark___internal___owner = 'Logo.childMarkdownRemark.internal.owner',
  Logo___childMarkdownRemark___internal___type = 'Logo.childMarkdownRemark.internal.type',
  Logo___childMdx___rawBody = 'Logo.childMdx.rawBody',
  Logo___childMdx___fileAbsolutePath = 'Logo.childMdx.fileAbsolutePath',
  Logo___childMdx___frontmatter___title = 'Logo.childMdx.frontmatter.title',
  Logo___childMdx___frontmatter___path = 'Logo.childMdx.frontmatter.path',
  Logo___childMdx___frontmatter___date = 'Logo.childMdx.frontmatter.date',
  Logo___childMdx___frontmatter___tags = 'Logo.childMdx.frontmatter.tags',
  Logo___childMdx___frontmatter___draft = 'Logo.childMdx.frontmatter.draft',
  Logo___childMdx___body = 'Logo.childMdx.body',
  Logo___childMdx___excerpt = 'Logo.childMdx.excerpt',
  Logo___childMdx___headings = 'Logo.childMdx.headings',
  Logo___childMdx___headings___value = 'Logo.childMdx.headings.value',
  Logo___childMdx___headings___depth = 'Logo.childMdx.headings.depth',
  Logo___childMdx___html = 'Logo.childMdx.html',
  Logo___childMdx___mdxAST = 'Logo.childMdx.mdxAST',
  Logo___childMdx___tableOfContents = 'Logo.childMdx.tableOfContents',
  Logo___childMdx___timeToRead = 'Logo.childMdx.timeToRead',
  Logo___childMdx___wordCount___paragraphs = 'Logo.childMdx.wordCount.paragraphs',
  Logo___childMdx___wordCount___sentences = 'Logo.childMdx.wordCount.sentences',
  Logo___childMdx___wordCount___words = 'Logo.childMdx.wordCount.words',
  Logo___childMdx___id = 'Logo.childMdx.id',
  Logo___childMdx___parent___id = 'Logo.childMdx.parent.id',
  Logo___childMdx___parent___children = 'Logo.childMdx.parent.children',
  Logo___childMdx___children = 'Logo.childMdx.children',
  Logo___childMdx___children___id = 'Logo.childMdx.children.id',
  Logo___childMdx___children___children = 'Logo.childMdx.children.children',
  Logo___childMdx___internal___content = 'Logo.childMdx.internal.content',
  Logo___childMdx___internal___contentDigest = 'Logo.childMdx.internal.contentDigest',
  Logo___childMdx___internal___description = 'Logo.childMdx.internal.description',
  Logo___childMdx___internal___fieldOwners = 'Logo.childMdx.internal.fieldOwners',
  Logo___childMdx___internal___ignoreType = 'Logo.childMdx.internal.ignoreType',
  Logo___childMdx___internal___mediaType = 'Logo.childMdx.internal.mediaType',
  Logo___childMdx___internal___owner = 'Logo.childMdx.internal.owner',
  Logo___childMdx___internal___type = 'Logo.childMdx.internal.type',
  strapiId = 'strapiId',
  childStrapiArticleContent___id = 'childStrapiArticleContent.id',
  childStrapiArticleContent___parent___id = 'childStrapiArticleContent.parent.id',
  childStrapiArticleContent___parent___parent___id = 'childStrapiArticleContent.parent.parent.id',
  childStrapiArticleContent___parent___parent___children = 'childStrapiArticleContent.parent.parent.children',
  childStrapiArticleContent___parent___children = 'childStrapiArticleContent.parent.children',
  childStrapiArticleContent___parent___children___id = 'childStrapiArticleContent.parent.children.id',
  childStrapiArticleContent___parent___children___children = 'childStrapiArticleContent.parent.children.children',
  childStrapiArticleContent___parent___internal___content = 'childStrapiArticleContent.parent.internal.content',
  childStrapiArticleContent___parent___internal___contentDigest = 'childStrapiArticleContent.parent.internal.contentDigest',
  childStrapiArticleContent___parent___internal___description = 'childStrapiArticleContent.parent.internal.description',
  childStrapiArticleContent___parent___internal___fieldOwners = 'childStrapiArticleContent.parent.internal.fieldOwners',
  childStrapiArticleContent___parent___internal___ignoreType = 'childStrapiArticleContent.parent.internal.ignoreType',
  childStrapiArticleContent___parent___internal___mediaType = 'childStrapiArticleContent.parent.internal.mediaType',
  childStrapiArticleContent___parent___internal___owner = 'childStrapiArticleContent.parent.internal.owner',
  childStrapiArticleContent___parent___internal___type = 'childStrapiArticleContent.parent.internal.type',
  childStrapiArticleContent___children = 'childStrapiArticleContent.children',
  childStrapiArticleContent___children___id = 'childStrapiArticleContent.children.id',
  childStrapiArticleContent___children___parent___id = 'childStrapiArticleContent.children.parent.id',
  childStrapiArticleContent___children___parent___children = 'childStrapiArticleContent.children.parent.children',
  childStrapiArticleContent___children___children = 'childStrapiArticleContent.children.children',
  childStrapiArticleContent___children___children___id = 'childStrapiArticleContent.children.children.id',
  childStrapiArticleContent___children___children___children = 'childStrapiArticleContent.children.children.children',
  childStrapiArticleContent___children___internal___content = 'childStrapiArticleContent.children.internal.content',
  childStrapiArticleContent___children___internal___contentDigest = 'childStrapiArticleContent.children.internal.contentDigest',
  childStrapiArticleContent___children___internal___description = 'childStrapiArticleContent.children.internal.description',
  childStrapiArticleContent___children___internal___fieldOwners = 'childStrapiArticleContent.children.internal.fieldOwners',
  childStrapiArticleContent___children___internal___ignoreType = 'childStrapiArticleContent.children.internal.ignoreType',
  childStrapiArticleContent___children___internal___mediaType = 'childStrapiArticleContent.children.internal.mediaType',
  childStrapiArticleContent___children___internal___owner = 'childStrapiArticleContent.children.internal.owner',
  childStrapiArticleContent___children___internal___type = 'childStrapiArticleContent.children.internal.type',
  childStrapiArticleContent___internal___content = 'childStrapiArticleContent.internal.content',
  childStrapiArticleContent___internal___contentDigest = 'childStrapiArticleContent.internal.contentDigest',
  childStrapiArticleContent___internal___description = 'childStrapiArticleContent.internal.description',
  childStrapiArticleContent___internal___fieldOwners = 'childStrapiArticleContent.internal.fieldOwners',
  childStrapiArticleContent___internal___ignoreType = 'childStrapiArticleContent.internal.ignoreType',
  childStrapiArticleContent___internal___mediaType = 'childStrapiArticleContent.internal.mediaType',
  childStrapiArticleContent___internal___owner = 'childStrapiArticleContent.internal.owner',
  childStrapiArticleContent___internal___type = 'childStrapiArticleContent.internal.type',
  childStrapiArticleContent___childMarkdownRemark___id = 'childStrapiArticleContent.childMarkdownRemark.id',
  childStrapiArticleContent___childMarkdownRemark___frontmatter___title = 'childStrapiArticleContent.childMarkdownRemark.frontmatter.title',
  childStrapiArticleContent___childMarkdownRemark___frontmatter___path = 'childStrapiArticleContent.childMarkdownRemark.frontmatter.path',
  childStrapiArticleContent___childMarkdownRemark___frontmatter___date = 'childStrapiArticleContent.childMarkdownRemark.frontmatter.date',
  childStrapiArticleContent___childMarkdownRemark___frontmatter___tags = 'childStrapiArticleContent.childMarkdownRemark.frontmatter.tags',
  childStrapiArticleContent___childMarkdownRemark___frontmatter___draft = 'childStrapiArticleContent.childMarkdownRemark.frontmatter.draft',
  childStrapiArticleContent___childMarkdownRemark___excerpt = 'childStrapiArticleContent.childMarkdownRemark.excerpt',
  childStrapiArticleContent___childMarkdownRemark___rawMarkdownBody = 'childStrapiArticleContent.childMarkdownRemark.rawMarkdownBody',
  childStrapiArticleContent___childMarkdownRemark___fileAbsolutePath = 'childStrapiArticleContent.childMarkdownRemark.fileAbsolutePath',
  childStrapiArticleContent___childMarkdownRemark___html = 'childStrapiArticleContent.childMarkdownRemark.html',
  childStrapiArticleContent___childMarkdownRemark___htmlAst = 'childStrapiArticleContent.childMarkdownRemark.htmlAst',
  childStrapiArticleContent___childMarkdownRemark___excerptAst = 'childStrapiArticleContent.childMarkdownRemark.excerptAst',
  childStrapiArticleContent___childMarkdownRemark___headings = 'childStrapiArticleContent.childMarkdownRemark.headings',
  childStrapiArticleContent___childMarkdownRemark___headings___value = 'childStrapiArticleContent.childMarkdownRemark.headings.value',
  childStrapiArticleContent___childMarkdownRemark___headings___depth = 'childStrapiArticleContent.childMarkdownRemark.headings.depth',
  childStrapiArticleContent___childMarkdownRemark___timeToRead = 'childStrapiArticleContent.childMarkdownRemark.timeToRead',
  childStrapiArticleContent___childMarkdownRemark___tableOfContents = 'childStrapiArticleContent.childMarkdownRemark.tableOfContents',
  childStrapiArticleContent___childMarkdownRemark___wordCount___paragraphs = 'childStrapiArticleContent.childMarkdownRemark.wordCount.paragraphs',
  childStrapiArticleContent___childMarkdownRemark___wordCount___sentences = 'childStrapiArticleContent.childMarkdownRemark.wordCount.sentences',
  childStrapiArticleContent___childMarkdownRemark___wordCount___words = 'childStrapiArticleContent.childMarkdownRemark.wordCount.words',
  childStrapiArticleContent___childMarkdownRemark___parent___id = 'childStrapiArticleContent.childMarkdownRemark.parent.id',
  childStrapiArticleContent___childMarkdownRemark___parent___children = 'childStrapiArticleContent.childMarkdownRemark.parent.children',
  childStrapiArticleContent___childMarkdownRemark___children = 'childStrapiArticleContent.childMarkdownRemark.children',
  childStrapiArticleContent___childMarkdownRemark___children___id = 'childStrapiArticleContent.childMarkdownRemark.children.id',
  childStrapiArticleContent___childMarkdownRemark___children___children = 'childStrapiArticleContent.childMarkdownRemark.children.children',
  childStrapiArticleContent___childMarkdownRemark___internal___content = 'childStrapiArticleContent.childMarkdownRemark.internal.content',
  childStrapiArticleContent___childMarkdownRemark___internal___contentDigest = 'childStrapiArticleContent.childMarkdownRemark.internal.contentDigest',
  childStrapiArticleContent___childMarkdownRemark___internal___description = 'childStrapiArticleContent.childMarkdownRemark.internal.description',
  childStrapiArticleContent___childMarkdownRemark___internal___fieldOwners = 'childStrapiArticleContent.childMarkdownRemark.internal.fieldOwners',
  childStrapiArticleContent___childMarkdownRemark___internal___ignoreType = 'childStrapiArticleContent.childMarkdownRemark.internal.ignoreType',
  childStrapiArticleContent___childMarkdownRemark___internal___mediaType = 'childStrapiArticleContent.childMarkdownRemark.internal.mediaType',
  childStrapiArticleContent___childMarkdownRemark___internal___owner = 'childStrapiArticleContent.childMarkdownRemark.internal.owner',
  childStrapiArticleContent___childMarkdownRemark___internal___type = 'childStrapiArticleContent.childMarkdownRemark.internal.type',
  childStrapiArticleContent___childMdx___rawBody = 'childStrapiArticleContent.childMdx.rawBody',
  childStrapiArticleContent___childMdx___fileAbsolutePath = 'childStrapiArticleContent.childMdx.fileAbsolutePath',
  childStrapiArticleContent___childMdx___frontmatter___title = 'childStrapiArticleContent.childMdx.frontmatter.title',
  childStrapiArticleContent___childMdx___frontmatter___path = 'childStrapiArticleContent.childMdx.frontmatter.path',
  childStrapiArticleContent___childMdx___frontmatter___date = 'childStrapiArticleContent.childMdx.frontmatter.date',
  childStrapiArticleContent___childMdx___frontmatter___tags = 'childStrapiArticleContent.childMdx.frontmatter.tags',
  childStrapiArticleContent___childMdx___frontmatter___draft = 'childStrapiArticleContent.childMdx.frontmatter.draft',
  childStrapiArticleContent___childMdx___body = 'childStrapiArticleContent.childMdx.body',
  childStrapiArticleContent___childMdx___excerpt = 'childStrapiArticleContent.childMdx.excerpt',
  childStrapiArticleContent___childMdx___headings = 'childStrapiArticleContent.childMdx.headings',
  childStrapiArticleContent___childMdx___headings___value = 'childStrapiArticleContent.childMdx.headings.value',
  childStrapiArticleContent___childMdx___headings___depth = 'childStrapiArticleContent.childMdx.headings.depth',
  childStrapiArticleContent___childMdx___html = 'childStrapiArticleContent.childMdx.html',
  childStrapiArticleContent___childMdx___mdxAST = 'childStrapiArticleContent.childMdx.mdxAST',
  childStrapiArticleContent___childMdx___tableOfContents = 'childStrapiArticleContent.childMdx.tableOfContents',
  childStrapiArticleContent___childMdx___timeToRead = 'childStrapiArticleContent.childMdx.timeToRead',
  childStrapiArticleContent___childMdx___wordCount___paragraphs = 'childStrapiArticleContent.childMdx.wordCount.paragraphs',
  childStrapiArticleContent___childMdx___wordCount___sentences = 'childStrapiArticleContent.childMdx.wordCount.sentences',
  childStrapiArticleContent___childMdx___wordCount___words = 'childStrapiArticleContent.childMdx.wordCount.words',
  childStrapiArticleContent___childMdx___id = 'childStrapiArticleContent.childMdx.id',
  childStrapiArticleContent___childMdx___parent___id = 'childStrapiArticleContent.childMdx.parent.id',
  childStrapiArticleContent___childMdx___parent___children = 'childStrapiArticleContent.childMdx.parent.children',
  childStrapiArticleContent___childMdx___children = 'childStrapiArticleContent.childMdx.children',
  childStrapiArticleContent___childMdx___children___id = 'childStrapiArticleContent.childMdx.children.id',
  childStrapiArticleContent___childMdx___children___children = 'childStrapiArticleContent.childMdx.children.children',
  childStrapiArticleContent___childMdx___internal___content = 'childStrapiArticleContent.childMdx.internal.content',
  childStrapiArticleContent___childMdx___internal___contentDigest = 'childStrapiArticleContent.childMdx.internal.contentDigest',
  childStrapiArticleContent___childMdx___internal___description = 'childStrapiArticleContent.childMdx.internal.description',
  childStrapiArticleContent___childMdx___internal___fieldOwners = 'childStrapiArticleContent.childMdx.internal.fieldOwners',
  childStrapiArticleContent___childMdx___internal___ignoreType = 'childStrapiArticleContent.childMdx.internal.ignoreType',
  childStrapiArticleContent___childMdx___internal___mediaType = 'childStrapiArticleContent.childMdx.internal.mediaType',
  childStrapiArticleContent___childMdx___internal___owner = 'childStrapiArticleContent.childMdx.internal.owner',
  childStrapiArticleContent___childMdx___internal___type = 'childStrapiArticleContent.childMdx.internal.type'
}

type StrapiArticleFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly Introduction: Maybe<StringQueryOperatorInput>;
  readonly Content: Maybe<StringQueryOperatorInput>;
  readonly Title: Maybe<StringQueryOperatorInput>;
  readonly CreatedAt: Maybe<DateQueryOperatorInput>;
  readonly Author: Maybe<StrapiArticleAuthorFilterInput>;
  readonly IsEnabled: Maybe<BooleanQueryOperatorInput>;
  readonly created_at: Maybe<DateQueryOperatorInput>;
  readonly updated_at: Maybe<DateQueryOperatorInput>;
  readonly Logo: Maybe<FileFilterInput>;
  readonly strapiId: Maybe<IntQueryOperatorInput>;
  readonly childStrapiArticleContent: Maybe<StrapiArticleContentFilterInput>;
};

type StrapiArticleGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StrapiArticleEdge>;
  readonly nodes: ReadonlyArray<StrapiArticle>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type StrapiArticleSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<StrapiArticleFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type StrapiUser = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly username: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly provider: Maybe<Scalars['String']>;
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly blocked: Maybe<Scalars['Boolean']>;
  readonly role: Maybe<StrapiUserRole>;
  readonly created_at: Maybe<Scalars['Date']>;
  readonly updated_at: Maybe<Scalars['Date']>;
  readonly first_name: Maybe<Scalars['String']>;
  readonly last_name: Maybe<Scalars['String']>;
  readonly avatar: Maybe<File>;
  readonly articles: Maybe<ReadonlyArray<Maybe<StrapiUserArticles>>>;
  readonly strapiId: Maybe<Scalars['Int']>;
};


type StrapiUser_created_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StrapiUser_updated_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type StrapiUserArticles = {
  readonly id: Maybe<Scalars['Int']>;
  readonly Introduction: Maybe<Scalars['String']>;
  readonly Content: Maybe<Scalars['String']>;
  readonly Title: Maybe<Scalars['String']>;
  readonly CreatedAt: Maybe<Scalars['Date']>;
  readonly Author: Maybe<Scalars['Int']>;
  readonly IsEnabled: Maybe<Scalars['Boolean']>;
  readonly created_at: Maybe<Scalars['Date']>;
  readonly updated_at: Maybe<Scalars['Date']>;
  readonly Logo: Maybe<File>;
};


type StrapiUserArticles_CreatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StrapiUserArticles_created_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StrapiUserArticles_updated_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type StrapiUserArticlesFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly Introduction: Maybe<StringQueryOperatorInput>;
  readonly Content: Maybe<StringQueryOperatorInput>;
  readonly Title: Maybe<StringQueryOperatorInput>;
  readonly CreatedAt: Maybe<DateQueryOperatorInput>;
  readonly Author: Maybe<IntQueryOperatorInput>;
  readonly IsEnabled: Maybe<BooleanQueryOperatorInput>;
  readonly created_at: Maybe<DateQueryOperatorInput>;
  readonly updated_at: Maybe<DateQueryOperatorInput>;
  readonly Logo: Maybe<FileFilterInput>;
};

type StrapiUserArticlesFilterListInput = {
  readonly elemMatch: Maybe<StrapiUserArticlesFilterInput>;
};

type StrapiUserConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StrapiUserEdge>;
  readonly nodes: ReadonlyArray<StrapiUser>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<StrapiUserGroupConnection>;
};


type StrapiUserConnection_distinctArgs = {
  field: StrapiUserFieldsEnum;
};


type StrapiUserConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: StrapiUserFieldsEnum;
};

type StrapiUserEdge = {
  readonly next: Maybe<StrapiUser>;
  readonly node: StrapiUser;
  readonly previous: Maybe<StrapiUser>;
};

enum StrapiUserFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  username = 'username',
  email = 'email',
  provider = 'provider',
  confirmed = 'confirmed',
  blocked = 'blocked',
  role___id = 'role.id',
  role___name = 'role.name',
  role___description = 'role.description',
  role___type = 'role.type',
  created_at = 'created_at',
  updated_at = 'updated_at',
  first_name = 'first_name',
  last_name = 'last_name',
  avatar___sourceInstanceName = 'avatar.sourceInstanceName',
  avatar___absolutePath = 'avatar.absolutePath',
  avatar___relativePath = 'avatar.relativePath',
  avatar___extension = 'avatar.extension',
  avatar___size = 'avatar.size',
  avatar___prettySize = 'avatar.prettySize',
  avatar___modifiedTime = 'avatar.modifiedTime',
  avatar___accessTime = 'avatar.accessTime',
  avatar___changeTime = 'avatar.changeTime',
  avatar___birthTime = 'avatar.birthTime',
  avatar___root = 'avatar.root',
  avatar___dir = 'avatar.dir',
  avatar___base = 'avatar.base',
  avatar___ext = 'avatar.ext',
  avatar___name = 'avatar.name',
  avatar___relativeDirectory = 'avatar.relativeDirectory',
  avatar___dev = 'avatar.dev',
  avatar___mode = 'avatar.mode',
  avatar___nlink = 'avatar.nlink',
  avatar___uid = 'avatar.uid',
  avatar___gid = 'avatar.gid',
  avatar___rdev = 'avatar.rdev',
  avatar___ino = 'avatar.ino',
  avatar___atimeMs = 'avatar.atimeMs',
  avatar___mtimeMs = 'avatar.mtimeMs',
  avatar___ctimeMs = 'avatar.ctimeMs',
  avatar___atime = 'avatar.atime',
  avatar___mtime = 'avatar.mtime',
  avatar___ctime = 'avatar.ctime',
  avatar___birthtime = 'avatar.birthtime',
  avatar___birthtimeMs = 'avatar.birthtimeMs',
  avatar___blksize = 'avatar.blksize',
  avatar___blocks = 'avatar.blocks',
  avatar___publicURL = 'avatar.publicURL',
  avatar___childImageSharp___fixed___base64 = 'avatar.childImageSharp.fixed.base64',
  avatar___childImageSharp___fixed___tracedSVG = 'avatar.childImageSharp.fixed.tracedSVG',
  avatar___childImageSharp___fixed___aspectRatio = 'avatar.childImageSharp.fixed.aspectRatio',
  avatar___childImageSharp___fixed___width = 'avatar.childImageSharp.fixed.width',
  avatar___childImageSharp___fixed___height = 'avatar.childImageSharp.fixed.height',
  avatar___childImageSharp___fixed___src = 'avatar.childImageSharp.fixed.src',
  avatar___childImageSharp___fixed___srcSet = 'avatar.childImageSharp.fixed.srcSet',
  avatar___childImageSharp___fixed___srcWebp = 'avatar.childImageSharp.fixed.srcWebp',
  avatar___childImageSharp___fixed___srcSetWebp = 'avatar.childImageSharp.fixed.srcSetWebp',
  avatar___childImageSharp___fixed___originalName = 'avatar.childImageSharp.fixed.originalName',
  avatar___childImageSharp___resolutions___base64 = 'avatar.childImageSharp.resolutions.base64',
  avatar___childImageSharp___resolutions___tracedSVG = 'avatar.childImageSharp.resolutions.tracedSVG',
  avatar___childImageSharp___resolutions___aspectRatio = 'avatar.childImageSharp.resolutions.aspectRatio',
  avatar___childImageSharp___resolutions___width = 'avatar.childImageSharp.resolutions.width',
  avatar___childImageSharp___resolutions___height = 'avatar.childImageSharp.resolutions.height',
  avatar___childImageSharp___resolutions___src = 'avatar.childImageSharp.resolutions.src',
  avatar___childImageSharp___resolutions___srcSet = 'avatar.childImageSharp.resolutions.srcSet',
  avatar___childImageSharp___resolutions___srcWebp = 'avatar.childImageSharp.resolutions.srcWebp',
  avatar___childImageSharp___resolutions___srcSetWebp = 'avatar.childImageSharp.resolutions.srcSetWebp',
  avatar___childImageSharp___resolutions___originalName = 'avatar.childImageSharp.resolutions.originalName',
  avatar___childImageSharp___fluid___base64 = 'avatar.childImageSharp.fluid.base64',
  avatar___childImageSharp___fluid___tracedSVG = 'avatar.childImageSharp.fluid.tracedSVG',
  avatar___childImageSharp___fluid___aspectRatio = 'avatar.childImageSharp.fluid.aspectRatio',
  avatar___childImageSharp___fluid___src = 'avatar.childImageSharp.fluid.src',
  avatar___childImageSharp___fluid___srcSet = 'avatar.childImageSharp.fluid.srcSet',
  avatar___childImageSharp___fluid___srcWebp = 'avatar.childImageSharp.fluid.srcWebp',
  avatar___childImageSharp___fluid___srcSetWebp = 'avatar.childImageSharp.fluid.srcSetWebp',
  avatar___childImageSharp___fluid___sizes = 'avatar.childImageSharp.fluid.sizes',
  avatar___childImageSharp___fluid___originalImg = 'avatar.childImageSharp.fluid.originalImg',
  avatar___childImageSharp___fluid___originalName = 'avatar.childImageSharp.fluid.originalName',
  avatar___childImageSharp___fluid___presentationWidth = 'avatar.childImageSharp.fluid.presentationWidth',
  avatar___childImageSharp___fluid___presentationHeight = 'avatar.childImageSharp.fluid.presentationHeight',
  avatar___childImageSharp___sizes___base64 = 'avatar.childImageSharp.sizes.base64',
  avatar___childImageSharp___sizes___tracedSVG = 'avatar.childImageSharp.sizes.tracedSVG',
  avatar___childImageSharp___sizes___aspectRatio = 'avatar.childImageSharp.sizes.aspectRatio',
  avatar___childImageSharp___sizes___src = 'avatar.childImageSharp.sizes.src',
  avatar___childImageSharp___sizes___srcSet = 'avatar.childImageSharp.sizes.srcSet',
  avatar___childImageSharp___sizes___srcWebp = 'avatar.childImageSharp.sizes.srcWebp',
  avatar___childImageSharp___sizes___srcSetWebp = 'avatar.childImageSharp.sizes.srcSetWebp',
  avatar___childImageSharp___sizes___sizes = 'avatar.childImageSharp.sizes.sizes',
  avatar___childImageSharp___sizes___originalImg = 'avatar.childImageSharp.sizes.originalImg',
  avatar___childImageSharp___sizes___originalName = 'avatar.childImageSharp.sizes.originalName',
  avatar___childImageSharp___sizes___presentationWidth = 'avatar.childImageSharp.sizes.presentationWidth',
  avatar___childImageSharp___sizes___presentationHeight = 'avatar.childImageSharp.sizes.presentationHeight',
  avatar___childImageSharp___original___width = 'avatar.childImageSharp.original.width',
  avatar___childImageSharp___original___height = 'avatar.childImageSharp.original.height',
  avatar___childImageSharp___original___src = 'avatar.childImageSharp.original.src',
  avatar___childImageSharp___resize___src = 'avatar.childImageSharp.resize.src',
  avatar___childImageSharp___resize___tracedSVG = 'avatar.childImageSharp.resize.tracedSVG',
  avatar___childImageSharp___resize___width = 'avatar.childImageSharp.resize.width',
  avatar___childImageSharp___resize___height = 'avatar.childImageSharp.resize.height',
  avatar___childImageSharp___resize___aspectRatio = 'avatar.childImageSharp.resize.aspectRatio',
  avatar___childImageSharp___resize___originalName = 'avatar.childImageSharp.resize.originalName',
  avatar___childImageSharp___id = 'avatar.childImageSharp.id',
  avatar___childImageSharp___parent___id = 'avatar.childImageSharp.parent.id',
  avatar___childImageSharp___parent___children = 'avatar.childImageSharp.parent.children',
  avatar___childImageSharp___children = 'avatar.childImageSharp.children',
  avatar___childImageSharp___children___id = 'avatar.childImageSharp.children.id',
  avatar___childImageSharp___children___children = 'avatar.childImageSharp.children.children',
  avatar___childImageSharp___internal___content = 'avatar.childImageSharp.internal.content',
  avatar___childImageSharp___internal___contentDigest = 'avatar.childImageSharp.internal.contentDigest',
  avatar___childImageSharp___internal___description = 'avatar.childImageSharp.internal.description',
  avatar___childImageSharp___internal___fieldOwners = 'avatar.childImageSharp.internal.fieldOwners',
  avatar___childImageSharp___internal___ignoreType = 'avatar.childImageSharp.internal.ignoreType',
  avatar___childImageSharp___internal___mediaType = 'avatar.childImageSharp.internal.mediaType',
  avatar___childImageSharp___internal___owner = 'avatar.childImageSharp.internal.owner',
  avatar___childImageSharp___internal___type = 'avatar.childImageSharp.internal.type',
  avatar___id = 'avatar.id',
  avatar___parent___id = 'avatar.parent.id',
  avatar___parent___parent___id = 'avatar.parent.parent.id',
  avatar___parent___parent___children = 'avatar.parent.parent.children',
  avatar___parent___children = 'avatar.parent.children',
  avatar___parent___children___id = 'avatar.parent.children.id',
  avatar___parent___children___children = 'avatar.parent.children.children',
  avatar___parent___internal___content = 'avatar.parent.internal.content',
  avatar___parent___internal___contentDigest = 'avatar.parent.internal.contentDigest',
  avatar___parent___internal___description = 'avatar.parent.internal.description',
  avatar___parent___internal___fieldOwners = 'avatar.parent.internal.fieldOwners',
  avatar___parent___internal___ignoreType = 'avatar.parent.internal.ignoreType',
  avatar___parent___internal___mediaType = 'avatar.parent.internal.mediaType',
  avatar___parent___internal___owner = 'avatar.parent.internal.owner',
  avatar___parent___internal___type = 'avatar.parent.internal.type',
  avatar___children = 'avatar.children',
  avatar___children___id = 'avatar.children.id',
  avatar___children___parent___id = 'avatar.children.parent.id',
  avatar___children___parent___children = 'avatar.children.parent.children',
  avatar___children___children = 'avatar.children.children',
  avatar___children___children___id = 'avatar.children.children.id',
  avatar___children___children___children = 'avatar.children.children.children',
  avatar___children___internal___content = 'avatar.children.internal.content',
  avatar___children___internal___contentDigest = 'avatar.children.internal.contentDigest',
  avatar___children___internal___description = 'avatar.children.internal.description',
  avatar___children___internal___fieldOwners = 'avatar.children.internal.fieldOwners',
  avatar___children___internal___ignoreType = 'avatar.children.internal.ignoreType',
  avatar___children___internal___mediaType = 'avatar.children.internal.mediaType',
  avatar___children___internal___owner = 'avatar.children.internal.owner',
  avatar___children___internal___type = 'avatar.children.internal.type',
  avatar___internal___content = 'avatar.internal.content',
  avatar___internal___contentDigest = 'avatar.internal.contentDigest',
  avatar___internal___description = 'avatar.internal.description',
  avatar___internal___fieldOwners = 'avatar.internal.fieldOwners',
  avatar___internal___ignoreType = 'avatar.internal.ignoreType',
  avatar___internal___mediaType = 'avatar.internal.mediaType',
  avatar___internal___owner = 'avatar.internal.owner',
  avatar___internal___type = 'avatar.internal.type',
  avatar___childMarkdownRemark___id = 'avatar.childMarkdownRemark.id',
  avatar___childMarkdownRemark___frontmatter___title = 'avatar.childMarkdownRemark.frontmatter.title',
  avatar___childMarkdownRemark___frontmatter___path = 'avatar.childMarkdownRemark.frontmatter.path',
  avatar___childMarkdownRemark___frontmatter___date = 'avatar.childMarkdownRemark.frontmatter.date',
  avatar___childMarkdownRemark___frontmatter___tags = 'avatar.childMarkdownRemark.frontmatter.tags',
  avatar___childMarkdownRemark___frontmatter___draft = 'avatar.childMarkdownRemark.frontmatter.draft',
  avatar___childMarkdownRemark___excerpt = 'avatar.childMarkdownRemark.excerpt',
  avatar___childMarkdownRemark___rawMarkdownBody = 'avatar.childMarkdownRemark.rawMarkdownBody',
  avatar___childMarkdownRemark___fileAbsolutePath = 'avatar.childMarkdownRemark.fileAbsolutePath',
  avatar___childMarkdownRemark___html = 'avatar.childMarkdownRemark.html',
  avatar___childMarkdownRemark___htmlAst = 'avatar.childMarkdownRemark.htmlAst',
  avatar___childMarkdownRemark___excerptAst = 'avatar.childMarkdownRemark.excerptAst',
  avatar___childMarkdownRemark___headings = 'avatar.childMarkdownRemark.headings',
  avatar___childMarkdownRemark___headings___value = 'avatar.childMarkdownRemark.headings.value',
  avatar___childMarkdownRemark___headings___depth = 'avatar.childMarkdownRemark.headings.depth',
  avatar___childMarkdownRemark___timeToRead = 'avatar.childMarkdownRemark.timeToRead',
  avatar___childMarkdownRemark___tableOfContents = 'avatar.childMarkdownRemark.tableOfContents',
  avatar___childMarkdownRemark___wordCount___paragraphs = 'avatar.childMarkdownRemark.wordCount.paragraphs',
  avatar___childMarkdownRemark___wordCount___sentences = 'avatar.childMarkdownRemark.wordCount.sentences',
  avatar___childMarkdownRemark___wordCount___words = 'avatar.childMarkdownRemark.wordCount.words',
  avatar___childMarkdownRemark___parent___id = 'avatar.childMarkdownRemark.parent.id',
  avatar___childMarkdownRemark___parent___children = 'avatar.childMarkdownRemark.parent.children',
  avatar___childMarkdownRemark___children = 'avatar.childMarkdownRemark.children',
  avatar___childMarkdownRemark___children___id = 'avatar.childMarkdownRemark.children.id',
  avatar___childMarkdownRemark___children___children = 'avatar.childMarkdownRemark.children.children',
  avatar___childMarkdownRemark___internal___content = 'avatar.childMarkdownRemark.internal.content',
  avatar___childMarkdownRemark___internal___contentDigest = 'avatar.childMarkdownRemark.internal.contentDigest',
  avatar___childMarkdownRemark___internal___description = 'avatar.childMarkdownRemark.internal.description',
  avatar___childMarkdownRemark___internal___fieldOwners = 'avatar.childMarkdownRemark.internal.fieldOwners',
  avatar___childMarkdownRemark___internal___ignoreType = 'avatar.childMarkdownRemark.internal.ignoreType',
  avatar___childMarkdownRemark___internal___mediaType = 'avatar.childMarkdownRemark.internal.mediaType',
  avatar___childMarkdownRemark___internal___owner = 'avatar.childMarkdownRemark.internal.owner',
  avatar___childMarkdownRemark___internal___type = 'avatar.childMarkdownRemark.internal.type',
  avatar___childMdx___rawBody = 'avatar.childMdx.rawBody',
  avatar___childMdx___fileAbsolutePath = 'avatar.childMdx.fileAbsolutePath',
  avatar___childMdx___frontmatter___title = 'avatar.childMdx.frontmatter.title',
  avatar___childMdx___frontmatter___path = 'avatar.childMdx.frontmatter.path',
  avatar___childMdx___frontmatter___date = 'avatar.childMdx.frontmatter.date',
  avatar___childMdx___frontmatter___tags = 'avatar.childMdx.frontmatter.tags',
  avatar___childMdx___frontmatter___draft = 'avatar.childMdx.frontmatter.draft',
  avatar___childMdx___body = 'avatar.childMdx.body',
  avatar___childMdx___excerpt = 'avatar.childMdx.excerpt',
  avatar___childMdx___headings = 'avatar.childMdx.headings',
  avatar___childMdx___headings___value = 'avatar.childMdx.headings.value',
  avatar___childMdx___headings___depth = 'avatar.childMdx.headings.depth',
  avatar___childMdx___html = 'avatar.childMdx.html',
  avatar___childMdx___mdxAST = 'avatar.childMdx.mdxAST',
  avatar___childMdx___tableOfContents = 'avatar.childMdx.tableOfContents',
  avatar___childMdx___timeToRead = 'avatar.childMdx.timeToRead',
  avatar___childMdx___wordCount___paragraphs = 'avatar.childMdx.wordCount.paragraphs',
  avatar___childMdx___wordCount___sentences = 'avatar.childMdx.wordCount.sentences',
  avatar___childMdx___wordCount___words = 'avatar.childMdx.wordCount.words',
  avatar___childMdx___id = 'avatar.childMdx.id',
  avatar___childMdx___parent___id = 'avatar.childMdx.parent.id',
  avatar___childMdx___parent___children = 'avatar.childMdx.parent.children',
  avatar___childMdx___children = 'avatar.childMdx.children',
  avatar___childMdx___children___id = 'avatar.childMdx.children.id',
  avatar___childMdx___children___children = 'avatar.childMdx.children.children',
  avatar___childMdx___internal___content = 'avatar.childMdx.internal.content',
  avatar___childMdx___internal___contentDigest = 'avatar.childMdx.internal.contentDigest',
  avatar___childMdx___internal___description = 'avatar.childMdx.internal.description',
  avatar___childMdx___internal___fieldOwners = 'avatar.childMdx.internal.fieldOwners',
  avatar___childMdx___internal___ignoreType = 'avatar.childMdx.internal.ignoreType',
  avatar___childMdx___internal___mediaType = 'avatar.childMdx.internal.mediaType',
  avatar___childMdx___internal___owner = 'avatar.childMdx.internal.owner',
  avatar___childMdx___internal___type = 'avatar.childMdx.internal.type',
  articles = 'articles',
  articles___id = 'articles.id',
  articles___Introduction = 'articles.Introduction',
  articles___Content = 'articles.Content',
  articles___Title = 'articles.Title',
  articles___CreatedAt = 'articles.CreatedAt',
  articles___Author = 'articles.Author',
  articles___IsEnabled = 'articles.IsEnabled',
  articles___created_at = 'articles.created_at',
  articles___updated_at = 'articles.updated_at',
  articles___Logo___sourceInstanceName = 'articles.Logo.sourceInstanceName',
  articles___Logo___absolutePath = 'articles.Logo.absolutePath',
  articles___Logo___relativePath = 'articles.Logo.relativePath',
  articles___Logo___extension = 'articles.Logo.extension',
  articles___Logo___size = 'articles.Logo.size',
  articles___Logo___prettySize = 'articles.Logo.prettySize',
  articles___Logo___modifiedTime = 'articles.Logo.modifiedTime',
  articles___Logo___accessTime = 'articles.Logo.accessTime',
  articles___Logo___changeTime = 'articles.Logo.changeTime',
  articles___Logo___birthTime = 'articles.Logo.birthTime',
  articles___Logo___root = 'articles.Logo.root',
  articles___Logo___dir = 'articles.Logo.dir',
  articles___Logo___base = 'articles.Logo.base',
  articles___Logo___ext = 'articles.Logo.ext',
  articles___Logo___name = 'articles.Logo.name',
  articles___Logo___relativeDirectory = 'articles.Logo.relativeDirectory',
  articles___Logo___dev = 'articles.Logo.dev',
  articles___Logo___mode = 'articles.Logo.mode',
  articles___Logo___nlink = 'articles.Logo.nlink',
  articles___Logo___uid = 'articles.Logo.uid',
  articles___Logo___gid = 'articles.Logo.gid',
  articles___Logo___rdev = 'articles.Logo.rdev',
  articles___Logo___ino = 'articles.Logo.ino',
  articles___Logo___atimeMs = 'articles.Logo.atimeMs',
  articles___Logo___mtimeMs = 'articles.Logo.mtimeMs',
  articles___Logo___ctimeMs = 'articles.Logo.ctimeMs',
  articles___Logo___atime = 'articles.Logo.atime',
  articles___Logo___mtime = 'articles.Logo.mtime',
  articles___Logo___ctime = 'articles.Logo.ctime',
  articles___Logo___birthtime = 'articles.Logo.birthtime',
  articles___Logo___birthtimeMs = 'articles.Logo.birthtimeMs',
  articles___Logo___blksize = 'articles.Logo.blksize',
  articles___Logo___blocks = 'articles.Logo.blocks',
  articles___Logo___publicURL = 'articles.Logo.publicURL',
  articles___Logo___childImageSharp___id = 'articles.Logo.childImageSharp.id',
  articles___Logo___childImageSharp___children = 'articles.Logo.childImageSharp.children',
  articles___Logo___id = 'articles.Logo.id',
  articles___Logo___parent___id = 'articles.Logo.parent.id',
  articles___Logo___parent___children = 'articles.Logo.parent.children',
  articles___Logo___children = 'articles.Logo.children',
  articles___Logo___children___id = 'articles.Logo.children.id',
  articles___Logo___children___children = 'articles.Logo.children.children',
  articles___Logo___internal___content = 'articles.Logo.internal.content',
  articles___Logo___internal___contentDigest = 'articles.Logo.internal.contentDigest',
  articles___Logo___internal___description = 'articles.Logo.internal.description',
  articles___Logo___internal___fieldOwners = 'articles.Logo.internal.fieldOwners',
  articles___Logo___internal___ignoreType = 'articles.Logo.internal.ignoreType',
  articles___Logo___internal___mediaType = 'articles.Logo.internal.mediaType',
  articles___Logo___internal___owner = 'articles.Logo.internal.owner',
  articles___Logo___internal___type = 'articles.Logo.internal.type',
  articles___Logo___childMarkdownRemark___id = 'articles.Logo.childMarkdownRemark.id',
  articles___Logo___childMarkdownRemark___excerpt = 'articles.Logo.childMarkdownRemark.excerpt',
  articles___Logo___childMarkdownRemark___rawMarkdownBody = 'articles.Logo.childMarkdownRemark.rawMarkdownBody',
  articles___Logo___childMarkdownRemark___fileAbsolutePath = 'articles.Logo.childMarkdownRemark.fileAbsolutePath',
  articles___Logo___childMarkdownRemark___html = 'articles.Logo.childMarkdownRemark.html',
  articles___Logo___childMarkdownRemark___htmlAst = 'articles.Logo.childMarkdownRemark.htmlAst',
  articles___Logo___childMarkdownRemark___excerptAst = 'articles.Logo.childMarkdownRemark.excerptAst',
  articles___Logo___childMarkdownRemark___headings = 'articles.Logo.childMarkdownRemark.headings',
  articles___Logo___childMarkdownRemark___timeToRead = 'articles.Logo.childMarkdownRemark.timeToRead',
  articles___Logo___childMarkdownRemark___tableOfContents = 'articles.Logo.childMarkdownRemark.tableOfContents',
  articles___Logo___childMarkdownRemark___children = 'articles.Logo.childMarkdownRemark.children',
  articles___Logo___childMdx___rawBody = 'articles.Logo.childMdx.rawBody',
  articles___Logo___childMdx___fileAbsolutePath = 'articles.Logo.childMdx.fileAbsolutePath',
  articles___Logo___childMdx___body = 'articles.Logo.childMdx.body',
  articles___Logo___childMdx___excerpt = 'articles.Logo.childMdx.excerpt',
  articles___Logo___childMdx___headings = 'articles.Logo.childMdx.headings',
  articles___Logo___childMdx___html = 'articles.Logo.childMdx.html',
  articles___Logo___childMdx___mdxAST = 'articles.Logo.childMdx.mdxAST',
  articles___Logo___childMdx___tableOfContents = 'articles.Logo.childMdx.tableOfContents',
  articles___Logo___childMdx___timeToRead = 'articles.Logo.childMdx.timeToRead',
  articles___Logo___childMdx___id = 'articles.Logo.childMdx.id',
  articles___Logo___childMdx___children = 'articles.Logo.childMdx.children',
  strapiId = 'strapiId'
}

type StrapiUserFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly username: Maybe<StringQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly provider: Maybe<StringQueryOperatorInput>;
  readonly confirmed: Maybe<BooleanQueryOperatorInput>;
  readonly blocked: Maybe<BooleanQueryOperatorInput>;
  readonly role: Maybe<StrapiUserRoleFilterInput>;
  readonly created_at: Maybe<DateQueryOperatorInput>;
  readonly updated_at: Maybe<DateQueryOperatorInput>;
  readonly first_name: Maybe<StringQueryOperatorInput>;
  readonly last_name: Maybe<StringQueryOperatorInput>;
  readonly avatar: Maybe<FileFilterInput>;
  readonly articles: Maybe<StrapiUserArticlesFilterListInput>;
  readonly strapiId: Maybe<IntQueryOperatorInput>;
};

type StrapiUserGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StrapiUserEdge>;
  readonly nodes: ReadonlyArray<StrapiUser>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type StrapiUserRole = {
  readonly id: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type StrapiUserRoleFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type StrapiUserSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<StrapiUserFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type SiteMetadataQueryVariables = {};


type SiteMetadataQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type ArticleTemplateQueryVariables = {
  id: Scalars['String'];
};


type ArticleTemplateQuery = { readonly strapiArticle: Maybe<(
    Pick<StrapiArticle, 'Title' | 'Content'>
    & { readonly Logo: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<GatsbyImageSharpFixedFragment> }> }>, readonly childStrapiArticleContent: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'body'>> }>, readonly Author: Maybe<(
      Pick<StrapiArticleAuthor, 'id' | 'username' | 'first_name' | 'last_name'>
      & { readonly avatar: Maybe<Pick<File, 'id' | 'extension' | 'publicURL'>> }
    )> }
  )> };

type TagListPageQueryVariables = {};


type TagListPageQuery = { readonly allMdx: { readonly group: ReadonlyArray<(
      Pick<MdxGroupConnection, 'totalCount'>
      & { tag: MdxGroupConnection['fieldValue'] }
    )> } };

type IndexPageQueryVariables = {
  skip: Scalars['Int'];
  limit: Scalars['Int'];
};


type IndexPageQuery = { readonly allMdx: { readonly edges: ReadonlyArray<{ readonly node: { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'date' | 'path' | 'title'>> } }> } };

type IndexQueryQueryVariables = {};


type IndexQueryQuery = { readonly allStrapiArticle: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<StrapiArticle, 'id' | 'Title' | 'Content'>
        & { readonly Logo: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<GatsbyImageSharpFixedFragment> }> }> }
      ) }> } };

type SinglePageQueryVariables = {
  path: Scalars['String'];
};


type SinglePageQuery = { readonly mdx: Maybe<(
    Pick<Mdx, 'body'>
    & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'date' | 'path' | 'title'>> }
  )> };

type TagPageQueryVariables = {
  tag: Scalars['String'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
};


type TagPageQuery = { readonly allMdx: { readonly edges: ReadonlyArray<{ readonly node: { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'date' | 'path' | 'title'>> } }> } };

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type PagesQueryQueryVariables = {};


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

}