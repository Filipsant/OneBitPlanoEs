  //funçoes construtora 

    function Book(title, pages, tags, author) {
        this.title = title
        this.pages = pages
        this.tags = tags
        this.author = author
        this.published = false
        this.inStock = 0
        this.addOnStock = function addOnStock(quantity){
            this.inStock += quantity
        }
        this.save = function(){
            //salva no banco de dados
         }
    }

    const author = {name: "christopher paolini"}
    const tags = ["fantasy", "adventure"]

    const eragon = new Book("eragon", 468, tags, author)

    console.log(eragon)

    const eldest = new Book("eldest", 644, tags, author)

    console.log(eldest)