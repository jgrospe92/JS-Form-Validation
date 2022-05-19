// NOTE: constructor function for Item
function Item(id, title, description, brand, unitPrice, quantity, make, thumbnail, category) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.brand = brand;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.make = make;
    this.thumbnail = thumbnail;
    this.category = category;

    // DEBUG:
    this.Test = function () {
        return ('ID: ' + id + ' title: ' + title + ' price: ' + unitPrice + ' category ' + category.categoryID);
    }
}