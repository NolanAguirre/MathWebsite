angular.module( 'mathApp', [] )
    .controller( 'math', MathController );

function MathController() {
    vm = this;

    function category( name, template, generate, subCategories ) {
        this.name = name;
        this.template = template;
        this.generate = generate;
        this.subCategories = subCategories;
    }

    function subCategory( name, template, generate ) {
        this.name = name;
        this.template = template;
        this.generate = generate;
    }
    vm.categories = [
        new category( 'Addition', 'templates/addition.html', addition(), [
            new subCategory(),
            new subCategory()
        ] ),
        new category( 'Subtraction', 'templates/subtraction.html', subtraction(), [
                new subCategory(),
                new subCategory()
        ] ),
        new category( 'Multiplication', 'templates/multiplication.html', multiplication(), [
            new subCategory(),
            new subCategory(),
            new subCategory(),
            new subCategory(),
            new subCategory(),
            new subCategory()
        ] ),
        new category( 'Division', 'templates/division.html', division(), [
            new subCategory(),
            new subCategory(),
            new subCategory()
        ] )
    ]


}
