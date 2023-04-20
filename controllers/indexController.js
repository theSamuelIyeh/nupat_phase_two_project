const index_get = (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
};

module.exports = {index_get};