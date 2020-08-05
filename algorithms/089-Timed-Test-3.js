// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    const pageCount = this.pageCount();
    const isOutOfRange = pageIndex + 1 > pageCount || pageIndex < 0;
    if (isOutOfRange) return -1;

    const isLastPage = pageIndex + 1 === pageCount;
    return isLastPage ? this.itemCount() - ((pageCount - 1) * this.itemsPerPage) : this.itemsPerPage;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    const hasNoItems = this.itemCount() === 0;
    const isOutOfRange = itemIndex > this.itemCount() || itemIndex < 0;
    if (hasNoItems || isOutOfRange) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
};
