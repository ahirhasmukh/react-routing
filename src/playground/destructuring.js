const book = {
    title : 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        //name: 'Penguin'
    }
};

const {title, author} = book;

console.log(`${title}'s auther is ${author}` );

const {name:publisherName="Hasmukh"} = book.publisher;
if(publisherName){
    console.log(`Book Publisher name is ${publisherName}` );
}