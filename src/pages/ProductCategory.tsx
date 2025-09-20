import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Cog, Download, Eye, ShoppingCart, Star } from "lucide-react";
import { getCategoryById } from "@/data/products";
import { getProductDetailById } from "@/data/productDetails";
import brassComponents from "@/assets/brass-components.jpg";
import brassValve from "@/assets/products/brass-valve.jpg";
import electricalFittings from "@/assets/products/electrical-fittings.jpg";
import turnedComponents from "@/assets/products/turned-components.jpg";
import brassPprInsert from "@/assets/products/brass-ppr-insert.jpg";

interface ProductItem {
  id: string;
  name: string;
  description: string;
  specifications: string[];
  image: string;
  cardImg: string;
  isPopular?: boolean;
  isNew?: boolean;
  isCustomizable?: boolean;
  technicalSheet?: string;
}

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  totalProducts: number;
  products: ProductItem[];
}

const ProductCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  // Get category data from central data source and map sub-products to display items
  const category = getCategoryById(categoryId || "");

  const displayProducts: ProductItem[] = React.useMemo(() => {
    if (!category || category.subProducts.length === 0) return [];
    return category.subProducts.map((sp) => {
      const detail = getProductDetailById(sp.id);
      return {
        id: sp.id,
        name: sp.name,
        description: sp.description,
        specifications: detail?.specifications || [],
        image: detail?.image || category.image,
        cardImg: detail?.cardImg || category.image,
      } as ProductItem;
    });
  }, [category]);


  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Category Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleRequestQuote = (productName: string) => {
    console.log(`Request quote for: ${productName}`);
  };

  const handleDownloadSpecs = (productName: string) => {
    console.log(`Download specifications for: ${productName}`);
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-white/80 mb-6">
            <Link to="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-white">{category.title}</span>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
              <Cog className="w-4 h-4 mr-2 text-secondary" />
              <span className="text-secondary font-semibold text-sm">PRODUCT CATEGORY</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              {category.title}
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-inter mb-8">
              {category.description}
            </p>

            <div className="flex items-center justify-center space-x-4 text-white/80">
              <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                {category.totalProducts} Products Available
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/products">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Categories
              </Button>
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-0">
                  {/* Product Image */}
                  <div className="relative rounded-t-lg overflow-hidden bg-muted/30 aspect-video">
                    <img
                      src={product.cardImg}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {product.isPopular && (
                        <Badge className="bg-secondary text-secondary-foreground text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      {product.isNew && (
                        <Badge className="bg-accent text-accent-foreground text-xs">
                          New
                        </Badge>
                      )}
                      {product.isCustomizable && (
                        <Badge variant="outline" className="border-primary text-primary text-xs bg-background/80">
                          Custom
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardTitle className="text-lg font-bold text-primary mb-3 font-poppins group-hover:text-secondary transition-colors">
                    {product.name}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm font-inter mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Key Specifications */}
                  <div className="space-y-2 mb-6">
                    <h5 className="text-xs font-semibold text-primary font-poppins">
                      Key Specifications:
                    </h5>
                    <div className="space-y-1">
                      {product.specifications.slice(0, 3).map((spec, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground font-inter">
                            {spec}
                          </span>
                        </div>
                      ))}
                      {product.specifications.length > 3 && (
                        <span className="text-xs text-secondary font-medium">
                          +{product.specifications.length - 3} more specs
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <Link to={`/products/${categoryId}/${product.id}`}>
                      <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownloadSpecs(product.name)}
                        className="flex-1 border-accent text-accent hover:bg-accent/10 text-xs"
                      >
                        <Download className="w-3 h-3 mr-1" />
                        Specs
                      </Button>
                      <Link to="/contact" className="flex-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRequestQuote(product.name)}
                          className="w-full border-primary text-primary hover:bg-primary/10 text-xs"
                        >
                          <ShoppingCart className="w-3 h-3 mr-1" />
                          Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-poppins">
                Need Custom Solutions?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-inter">
                We specialize in manufacturing custom brass components to your exact specifications. 
                Contact our engineering team for tailored solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-brass">
                    Request Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 hover:border-accent">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;