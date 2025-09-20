import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  ShoppingCart, 
  Share2, 
  Heart,
  Star,
  Check,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Cog,
  Shield
} from "lucide-react";
import { getProductDetailById } from "@/data/productDetails";
import { getProductById, getCategoryById } from "@/data/products";
import brassComponents from "@/assets/brass-components.jpg";
import brassValve from "@/assets/products/brass-valve.jpg";
import electricalFittings from "@/assets/products/electrical-fittings.jpg";
import turnedComponents from "@/assets/products/turned-components.jpg";
import brassPprInsert from "@/assets/products/brass-ppr-insert.jpg";
import facilityInterior from "@/assets/facility-interior.jpg";

interface ProductDetailData {
  id: string;
  name: string;
  categoryName: string;
  description: string;
  detailedDescription: string;
  images: string[];
  specifications: { [key: string]: string };
  features: string[];
  applications: string[];
  certifications: string[];
  technicalSheet?: string;
  isPopular?: boolean;
  isNew?: boolean;
  isCustomizable?: boolean;
  relatedProducts?: string[];
}

const ProductDetail = () => {
  const { categoryId, productId } = useParams<{ categoryId: string; productId: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Get product detail - check both main products and sub-products
  const productDetail = getProductDetailById(productId || "");
  
  // Get category and sub-product info for navigation context
  const category = getCategoryById(categoryId || "");
  const subProduct = categoryId && productId ? getProductById(categoryId, productId) : null;
  
  // Determine navigation context
  const isMainProduct = productDetail && !subProduct;
  const isSubProduct = productDetail && subProduct;
  
  // If we have a product detail, render the new layout
  if (productDetail) {
    return (
      <div className="min-h-screen">
        {/* Breadcrumb and Back Navigation */}
        <section className="py-8 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
                <span>/</span>
                {isSubProduct && category && (
                  <>
                    <Link to={`/products/${categoryId}`} className="hover:text-primary transition-colors">{category.title}</Link>
                    <span>/</span>
                  </>
                )}
                <span className="text-primary">{productDetail.title}</span>
                {isMainProduct && (
                  <span className="ml-4">
                    <Link to="/products">
                      <Button variant="outline" size="sm">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Products
                      </Button>
                    </Link>
                  </span>
                )}
              </div>
              {isSubProduct && (
                <Link to={`/products/${categoryId}`}>
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to {category?.title} Sub-Products
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Product Hero Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-square bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
                  <img
                    src={productDetail.image}
                    alt={productDetail.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center px-6 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
                  <Cog className="w-4 h-4 mr-2 text-secondary" />
                  <span className="text-secondary font-semibold text-sm">PRODUCT DETAILS</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
                  {productDetail.title}
                </h1>
                
                <p className="text-lg text-white/90 mb-8 font-inter leading-relaxed">
                  {productDetail.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-brass">
                    <Download className="mr-2 h-5 w-5" />
                    Request Quote
                  </Button>
                  {productDetail.technicalSheet && (
                    <Button variant="outline" size="lg" className="border-white/30 text-secondary-foreground hover:bg-white/10">
                      <FileText className="mr-2 h-5 w-5" />
                      Technical Sheet
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Content */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Features */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary font-poppins">
                    <Star className="w-5 h-5 mr-2 text-secondary" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {productDetail.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-inter text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Applications */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary font-poppins">
                    <Cog className="w-5 h-5 mr-2 text-secondary" />
                    Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {productDetail.applications.map((application, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground font-inter text-sm">
                          {application}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary font-poppins">
                    <Shield className="w-5 h-5 mr-2 text-secondary" />
                    Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {productDetail.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground font-inter text-sm">
                          {spec}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Downloads and Documentation */}
        {(productDetail.technicalSheet || productDetail.catalog) && (
          <section className="py-16 bg-gradient-subtle">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-primary mb-6 font-poppins">
                Downloads & Documentation
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-inter">
                Access detailed technical information and product documentation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {productDetail.technicalSheet && (
                  <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                    <FileText className="mr-2 h-5 w-5" />
                    Technical Specifications
                  </Button>
                )}
                {productDetail.catalog && (
                  <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                    <Download className="mr-2 h-5 w-5" />
                    Product Catalog
                  </Button>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-poppins">
                Ready to Order?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-inter">
                Contact our technical team for custom specifications, pricing, and delivery information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-brass">
                    Get Custom Quote
                  </Button>
                </Link>
                <Link to="/quality">
                  <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 hover:border-accent">
                    Quality Standards
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Fallback to existing sub-product detail layout
  // Default fallback data - this should only be used if no proper product detail is found
  const productData: ProductDetailData = {
    id: productId || "",
    name: subProduct?.name || "Product Not Found",
    categoryName: category?.title || "Unknown Category",
    description: subProduct?.description || "Product description not available.",
    detailedDescription: "Product details not available. Please contact us for more information about this product.",
    images: [brassComponents, facilityInterior, brassValve],
    specifications: {
      "Status": "Details being updated",
      "Contact": "Please reach out for specifications"
    },
    features: [
      "High-quality brass construction",
      "Professional grade manufacturing",
      "Custom specifications available"
    ],
    applications: [
      "Industrial applications",
      "Commercial use",
      "Professional installations"
    ],
    certifications: [
      "ISO 9001:2015 Quality Management",
      "CE Marking Compliance"
    ],
    isPopular: false,
    isNew: false,
    isCustomizable: true,
    relatedProducts: []
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setShowLightbox(true);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === productData.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? productData.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb and Back Navigation */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <span>/</span>
              {categoryId && category && (
                <>
                  <Link to={`/products/${categoryId}`} className="hover:text-primary transition-colors">
                    {category.title}
                  </Link>
                  <span>/</span>
                </>
              )}
              <span className="text-primary">{productData.name}</span>
            </div>
            {categoryId ? (
              <Link to={`/products/${categoryId}`}>
                <Button variant="outline" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to {category?.title}
                </Button>
              </Link>
            ) : (
              <Link to="/products">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Products
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative">
                <img 
                  src={productData.images[selectedImageIndex]}
                  alt={productData.name}
                  className="w-full h-96 object-cover rounded-xl shadow-lg cursor-pointer"
                  onClick={() => openLightbox(selectedImageIndex)}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                  onClick={() => openLightbox(selectedImageIndex)}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {productData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${productData.name} view ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all duration-200 flex-shrink-0 ${
                      selectedImageIndex === index ? 'border-secondary' : 'border-border hover:border-secondary/50'
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {productData.categoryName}
                  </Badge>
                  {productData.isPopular && (
                    <Badge className="bg-secondary text-secondary-foreground text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  {productData.isNew && (
                    <Badge className="bg-accent text-accent-foreground text-xs">
                      New
                    </Badge>
                  )}
                  {productData.isCustomizable && (
                    <Badge variant="outline" className="border-primary text-primary text-xs">
                      Customizable
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-primary font-poppins">
                  {productData.name}
                </h1>

                <p className="text-lg text-muted-foreground font-inter">
                  {productData.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-brass">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Request Quote
                  </Button>
                </Link>
                {productData.technicalSheet && (
                  <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
                    <Download className="mr-2 h-5 w-5" />
                    Technical Sheet
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "border-red-500 text-red-500" : ""}
                >
                  <Heart className={`mr-2 h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                </Button>
                <Button variant="ghost" size="lg">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>

              <Separator />

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Material:</span>
                  <span className="ml-2 font-medium text-primary">CW617N Brass</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Size Range:</span>
                  <span className="ml-2 font-medium text-primary">20-63mm</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Pressure:</span>
                  <span className="ml-2 font-medium text-primary">16 bar</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Thread:</span>
                  <span className="ml-2 font-medium text-primary">BSP Female</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Description */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Product Overview</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {productData.detailedDescription}
                </p>
              </div>

              {/* Technical Specifications */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Technical Specifications</h3>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(productData.specifications).map(([key, value]) => (
                      <div key={key} className="flex flex-col space-y-1 py-2 border-b border-border/50 last:border-0">
                        <span className="text-sm font-medium text-primary">{key}</span>
                        <span className="text-sm text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features & Applications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 font-poppins">Key Features</h3>
                  <ul className="space-y-3">
                    {productData.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 font-poppins">Applications</h3>
                  <ul className="space-y-3">
                    {productData.applications.map((application, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground text-sm font-inter">{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Certifications */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary mb-4 font-poppins">Certifications</h3>
                <ul className="space-y-2">
                  {productData.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Badge variant="outline" className="text-xs flex-shrink-0">
                        <Check className="w-3 h-3 mr-1" />
                        Certified
                      </Badge>
                      <span className="text-sm text-muted-foreground font-inter">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary mb-3 font-poppins">Need Custom Specifications?</h3>
                <p className="text-sm text-muted-foreground mb-4 font-inter">
                  Contact our technical team for custom sizing, materials, or special requirements.
                </p>
                <Link to="/contact">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Contact Technical Team
                  </Button>
                </Link>
              </div>

              {/* Quick Actions */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary mb-4 font-poppins">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Catalog
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    3D CAD Files
                  </Button>
                  <Link to="/contact" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Bulk Pricing
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-primary/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <Button
              variant="ghost"
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
            >
              <X className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              onClick={previousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            <img
              src={productData.images[selectedImageIndex]}
              alt={productData.name}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            
            <div className="flex justify-center space-x-2 mt-4">
              {productData.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    selectedImageIndex === index ? 'bg-secondary' : 'bg-background/50 hover:bg-background/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;