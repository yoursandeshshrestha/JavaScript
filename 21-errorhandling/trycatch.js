// Error = An Object that is created to represent a problem that occurs
//              Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//                    ex. close files, close connections, release resources

// practice 
function openFile() {
    try {
        // Simulating opening a file (not a real file operation)
        console.log('File opened successfully.');
        throw new Error('File read error'); // Simulating an error
    } catch (error) {
        console.error('Error opening file:', error.message);
        return null;
    } finally {
        console.log('File closing operation completed.');
    }
}

openFile();
