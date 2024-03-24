const File = {
    read: (path) => {
        return 'file content';
    },
    write(path, content) {
        console.log('writing to file');
    },
    delete(path) {
        console.log('deleting file');
    }

};
