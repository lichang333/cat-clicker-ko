var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.nicknames = ko.observableArray(['Tabtab', 'Mazen', 'Coco', 'Zhiqi']);

    this.title = ko.computed(function() {
        var title;
        var click = this.clickCount();
        if (click < 1) {
            title = 'Newborn';
        }else if (clicks < 2) {
            title = 'Infant';
        }else if (clicks < 13) {
            title = 'Child';
        }else if (click < 18) {
            title = 'Teen';
        }else if (click < 35) {
            title = 'Adult';
        }else{
            title = 'Ninja';
        }
        return title;
    }, this);
}


var ViewModel = function() {
    this.currentCat = ko.observable( new Cat() );

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
};

//     this.incrementCounter = function() {
//         this.clickCount(this.clickCount() + 1);
//         var count = 0;
//         count++;
//     };
//
// ko.applyBindings(new ViewModel());
