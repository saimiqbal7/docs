---
title: Filesystem Access
description: The File System Access API allows read, write and file management capabilities.
image: img/thumbnail.png
sidebar_label: Filesystem Access
---

import Description from "@site/src/components/description";

# Filesystem Access

<Description
  text="The File System Access API allows read, write and file management
  capabilities."
/>

This API allows interaction with files on a user's local device or on a user-accessible network file system. The core functionality of this API includes reading files, writing or saving files, and accessing the directory structure.

Most interaction with files and directories is accomplished with `fsPromises` methods from the Namespace wrapper class. The available `fsPromises` methods on the Namespace wrapper class include: `fs`, `fsStaking`, `fsWriteStream`, and `fsReadStream`.

### fs Method

The `fs` method takes in three arguments:

- `method` : The `fsPromise` method to call
- `path`: The path for the express call
- `...args`: Any remaining parameters for the FS call

```typescript
async fs(method, path, ...args) {
  // return Promise<any>
}
```

Example:

```javascript
// CREATE NEW DIRECTORY
await namespaceWrapper.fs("mkdir", `uploads`, {
  recursive: true,
});

// COPY FILE
await namespaceWrapper.fs("copyFile", `uploads/handler.js`, `utils/handler.js`);

// CREATE NEW FILE
await namespaceWrapper.fs("writeFile", `uploads/handler.js`);
```

### fsStaking Method

The `fsStaking` method takes in three arguments:

- `method` : The `fsPromise` method to call
- `path`: The path for the express call
- `...args`: Any remaining parameters for the FS call

```javascript
async fsStaking(method, path, ...args) {
  // return Promise<any>
}
```

### fsWriteStream Method

The `fsWriteStream` method takes in one argument:

- `imagepath` : A `string` to the image path

```javascript
  async fsWriteStream(imagepath: string) {
    const basePath = 'namespace/' + this.taskTxId;
    await fsPromises.mkdir(basePath, { recursive: true }).catch(console.error);
    const image = basePath + '/' + imagepath;
    const writer = fs.createWriteStream(image);
    return writer;
  }
```

### fsReadStream Method

The `fsReadStream` method takes in one argument:

- `imagepath`: A `string` to the image path

```javascript
  async fsReadStream(imagepath: string) {
    const basePath = 'namespace/' + this.taskTxId;
    await fsPromises.mkdir(basePath, { recursive: true }).catch(console.error);
    const image = basePath + imagepath;
    const file = fs.readFileSync(image);
    return file;
  }
```
