// NOTE: constructor function for Category
function Category(categoryID, categoryName, categoryDesc) {

    // Assigning parameter
    this.categoryID = categoryID;
    this.categoryName = categoryName;
    this.categoryDesc = categoryDesc;

    // DEBUG:
    this.Test = function () {
        return ('ID:' + this.categoryID + ' Name: ' + this.categoryName + ' desc:' + this.categoryDesc);
    }
}