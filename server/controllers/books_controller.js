let books = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
    },
    create: (req, res) => {
        const { title, author } = req.body;
        let book = ({ id:id, title:title, author:author });
        books.push(book);
        id++;
        res.status(200).send(books);
    },
    update: (req, res) => {
        let {title, author} = req.body;
        let paramId = Number(req.params.id);
        let bookIndex = books.findIndex(book => book.id == paramId);
        let book = books[bookIndex];

        books[bookIndex]={
            id: book.id,
            title: req.body.title || book.title,
            author: req.body.author || author.title
        }
        res.status(200).send(books)
    },
    delete: (req, res) => {
        let paramId = Number(req.params.id);
        let bookIndex = books.findIndex(book => book.id == paramId);
        
        books.splice(bookIndex, 1)

        res.status(200).send(books)
    }
}
