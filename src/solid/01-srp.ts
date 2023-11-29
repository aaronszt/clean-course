(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    
    }
    


    const productBloc = new ProductBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);



//  EJERCICIO

    class ProductService {

        getProduct( id: number ){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
        
        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
        
    };

    class Mailer {

        private masterEmail: string = 'aaron.sztych@gmail.com';
        
        sendEmail( emailList: string[], template: 'to-clients' | 'to-admins' ) {
            console.log('Enviando correo a los clientes', template);
            console.log(emailList);
            
        }

    }

    class ProductBlocc {
    
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer){
            this.productService = productService;
            this.mailer = mailer
        }
        
        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['aaron@gmail.com'], 'to-clients');
        }

    }
    
    class CartBloc {

        private itemsInCart: Object[] = [];
        
        addToCart( publicID: number ){
            console.log('Agregando al carrito ', publicID);
        }
        
    }

    const mailer = new Mailer();
    const product = new ProductService();
    const productBlocc = new ProductBlocc(product, mailer);
    const cartBloc = new CartBloc();

    productBlocc.loadProduct(10);
    productBlocc.saveProduct({ id: 10, name: 'OLED TV' });
    productBlocc.notifyClients();
    cartBloc.addToCart(10);


})();