"use client";

import { useState } from "react";
import { AdminLayout } from "@/components/admin-layout";
import { Heading, Subheading } from "@/components/ui/heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Fieldset,
  Legend,
  FieldGroup,
  Field,
  Label,
  Description,
  ErrorMessage,
} from "@/components/ui/fieldset";
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  CubeIcon,
  PhotoIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/16/solid";

// Mock data for products
const mockProducts = [
  {
    id: 1,
    name: "آيفون 15 برو",
    description: "هاتف ذكي من آبل بأحدث التقنيات",
    price: 4999,
    stock: 25,
    category: "الإلكترونيات",
    business: "متجر الإلكترونيات الذكية",
    status: "active",
    image: "/placeholder-product.jpg",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "فستان سهرة أنيق",
    description: "فستان سهرة نسائي بتصميم عصري",
    price: 899,
    stock: 12,
    category: "الملابس والأزياء",
    business: "بوتيك الأزياء العصرية",
    status: "active",
    image: "/placeholder-product.jpg",
    createdAt: "2024-01-12",
  },
  {
    id: 3,
    name: "لابتوب ديل XPS",
    description: "لابتوب عالي الأداء للمحترفين",
    price: 6499,
    stock: 8,
    category: "الإلكترونيات",
    business: "متجر الإلكترونيات الذكية",
    status: "active",
    image: "/placeholder-product.jpg",
    createdAt: "2024-01-10",
  },
  {
    id: 4,
    name: "ساعة ذكية",
    description: "ساعة ذكية بمميزات متقدمة",
    price: 1299,
    stock: 0,
    category: "الإلكترونيات",
    business: "متجر الإلكترونيات الذكية",
    status: "out_of_stock",
    image: "/placeholder-product.jpg",
    createdAt: "2024-01-08",
  },
  {
    id: 5,
    name: "حقيبة يد جلدية",
    description: "حقيبة يد نسائية من الجلد الطبيعي",
    price: 450,
    stock: 15,
    category: "الملابس والأزياء",
    business: "بوتيك الأزياء العصرية",
    status: "inactive",
    image: "/placeholder-product.jpg",
    createdAt: "2024-01-05",
  },
];

const mockCategories = [
  "الإلكترونيات",
  "الملابس والأزياء",
  "المنزل والحديقة",
  "الرياضة واللياقة",
];
const mockBusinesses = [
  "متجر الإلكترونيات الذكية",
  "بوتيك الأزياء العصرية",
  "مطعم الأصالة",
  "صالة الرياضة المتقدمة",
];

export default function ProductsPage() {
  const [products, setProducts] = useState(mockProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterBusiness, setFilterBusiness] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    business: "",
    status: "active",
    image: "",
  });

  const [errors, setErrors] = useState<any>({});

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || product.category === filterCategory;
    const matchesBusiness =
      filterBusiness === "all" || product.business === filterBusiness;
    const matchesStatus =
      filterStatus === "all" || product.status === filterStatus;
    return matchesSearch && matchesCategory && matchesBusiness && matchesStatus;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "اسم المنتج مطلوب";
    if (!formData.description.trim())
      newErrors.description = "وصف المنتج مطلوب";
    if (!formData.price || parseFloat(formData.price) <= 0)
      newErrors.price = "السعر مطلوب ويجب أن يكون أكبر من صفر";
    if (!formData.stock || parseInt(formData.stock) < 0)
      newErrors.stock = "الكمية مطلوبة ويجب أن تكون صفر أو أكثر";
    if (!formData.category) newErrors.category = "التصنيف مطلوب";
    if (!formData.business) newErrors.business = "المتجر مطلوب";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      status: parseInt(formData.stock) === 0 ? "out_of_stock" : formData.status,
    };

    if (editingProduct) {
      // Update existing product
      setProducts(
        products.map((product) =>
          product.id === editingProduct.id
            ? { ...product, ...productData }
            : product
        )
      );
    } else {
      // Add new product
      const newProduct = {
        id: Math.max(...products.map((p) => p.id)) + 1,
        ...productData,
        image: "/placeholder-product.jpg",
        createdAt: new Date().toISOString().split("T")[0],
      };
      setProducts([...products, newProduct]);
    }

    // Reset form
    setFormData({
      name: "",
      description: "",
      price: "",
      stock: "",
      category: "",
      business: "",
      status: "active",
      image: "",
    });
    setErrors({});
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      stock: product.stock.toString(),
      category: product.category,
      business: product.business,
      status: product.status,
      image: product.image,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (productId: number) => {
    if (confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
      setProducts(products.filter((product) => product.id !== productId));
    }
  };

  const toggleStatus = (productId: number) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? {
              ...product,
              status: product.status === "active" ? "inactive" : "active",
            }
          : product
      )
    );
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      stock: "",
      category: "",
      business: "",
      status: "active",
      image: "",
    });
    setErrors({});
    setIsModalOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "green";
      case "inactive":
        return "red";
      case "out_of_stock":
        return "yellow";
      default:
        return "zinc";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "نشط";
      case "inactive":
        return "غير نشط";
      case "out_of_stock":
        return "نفد المخزون";
      default:
        return status;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ar-SA", {
      style: "currency",
      currency: "SAR",
    }).format(price);
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Heading>إدارة المنتجات</Heading>
            <Subheading>إدارة منتجات المتاجر والخدمات</Subheading>
          </div>
          <Button onClick={openAddModal} className="flex items-center gap-2">
            <PlusIcon className="w-4 h-4" />
            إضافة منتج جديد
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Field>
              <Label>البحث</Label>
              <div className="relative mt-2">
                <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <Input
                  type="text"
                  placeholder="البحث بالاسم أو الوصف..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
            </Field>
            <Field>
              <Label>التصنيف</Label>
              <Select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="mt-2"
              >
                <option value="all">جميع التصنيفات</option>
                {mockCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            </Field>
            <Field>
              <Label>المتجر</Label>
              <Select
                value={filterBusiness}
                onChange={(e) => setFilterBusiness(e.target.value)}
                className="mt-2"
              >
                <option value="all">جميع المتاجر</option>
                {mockBusinesses.map((business) => (
                  <option key={business} value={business}>
                    {business}
                  </option>
                ))}
              </Select>
            </Field>
            <Field>
              <Label>الحالة</Label>
              <Select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="mt-2"
              >
                <option value="all">جميع الحالات</option>
                <option value="active">نشط</option>
                <option value="inactive">غير نشط</option>
                <option value="out_of_stock">نفد المخزون</option>
              </Select>
            </Field>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>المنتج</TableHeader>
                <TableHeader>السعر</TableHeader>
                <TableHeader>المخزون</TableHeader>
                <TableHeader>التصنيف</TableHeader>
                <TableHeader>المتجر</TableHeader>
                <TableHeader>الحالة</TableHeader>
                <TableHeader>الإجراءات</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <PhotoIcon className="w-6 h-6 text-zinc-400" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-1">
                          {product.description}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">
                      {formatPrice(product.price)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      color={
                        product.stock > 10
                          ? "green"
                          : product.stock > 0
                          ? "yellow"
                          : "red"
                      }
                    >
                      {product.stock} قطعة
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{product.category}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{product.business}</span>
                  </TableCell>
                  <TableCell>
                    <Badge color={getStatusColor(product.status)}>
                      {getStatusText(product.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        plain
                        onClick={() => toggleStatus(product.id)}
                        className="p-1"
                        title={product.status === "active" ? "إخفاء" : "إظهار"}
                        disabled={product.status === "out_of_stock"}
                      >
                        {product.status === "active" ? (
                          <EyeSlashIcon className="w-4 h-4" />
                        ) : (
                          <EyeIcon className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        plain
                        onClick={() => handleEdit(product)}
                        className="p-1"
                      >
                        <PencilIcon className="w-4 h-4" />
                      </Button>
                      <Button
                        plain
                        onClick={() => handleDelete(product.id)}
                        className="p-1 text-red-600 hover:text-red-700"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Add/Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-zinc-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  {editingProduct ? "تعديل المنتج" : "إضافة منتج جديد"}
                </h3>

                <form onSubmit={handleSubmit}>
                  <Fieldset>
                    <FieldGroup>
                      <Field>
                        <Label>اسم المنتج</Label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="أدخل اسم المنتج"
                        />
                        {errors.name && (
                          <ErrorMessage>{errors.name}</ErrorMessage>
                        )}
                      </Field>

                      <Field>
                        <Label>وصف المنتج</Label>
                        <Textarea
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              description: e.target.value,
                            })
                          }
                          placeholder="أدخل وصف المنتج ومميزاته"
                          rows={3}
                        />
                        {errors.description && (
                          <ErrorMessage>{errors.description}</ErrorMessage>
                        )}
                      </Field>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field>
                          <Label>السعر (ريال سعودي)</Label>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            value={formData.price}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                price: e.target.value,
                              })
                            }
                            placeholder="0.00"
                          />
                          {errors.price && (
                            <ErrorMessage>{errors.price}</ErrorMessage>
                          )}
                        </Field>

                        <Field>
                          <Label>الكمية المتوفرة</Label>
                          <Input
                            type="number"
                            min="0"
                            value={formData.stock}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                stock: e.target.value,
                              })
                            }
                            placeholder="0"
                          />
                          {errors.stock && (
                            <ErrorMessage>{errors.stock}</ErrorMessage>
                          )}
                        </Field>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field>
                          <Label>التصنيف</Label>
                          <Select
                            value={formData.category}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                category: e.target.value,
                              })
                            }
                          >
                            <option value="">اختر التصنيف</option>
                            {mockCategories.map((category) => (
                              <option key={category} value={category}>
                                {category}
                              </option>
                            ))}
                          </Select>
                          {errors.category && (
                            <ErrorMessage>{errors.category}</ErrorMessage>
                          )}
                        </Field>

                        <Field>
                          <Label>المتجر</Label>
                          <Select
                            value={formData.business}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                business: e.target.value,
                              })
                            }
                          >
                            <option value="">اختر المتجر</option>
                            {mockBusinesses.map((business) => (
                              <option key={business} value={business}>
                                {business}
                              </option>
                            ))}
                          </Select>
                          {errors.business && (
                            <ErrorMessage>{errors.business}</ErrorMessage>
                          )}
                        </Field>
                      </div>

                      <Field>
                        <Label>الحالة</Label>
                        <Select
                          value={formData.status}
                          onChange={(e) =>
                            setFormData({ ...formData, status: e.target.value })
                          }
                        >
                          <option value="active">نشط</option>
                          <option value="inactive">غير نشط</option>
                        </Select>
                        <Description>
                          المنتجات غير النشطة لن تظهر للعملاء
                        </Description>
                      </Field>
                    </FieldGroup>
                  </Fieldset>

                  <div className="flex justify-end gap-3 mt-6">
                    <Button
                      type="button"
                      plain
                      onClick={() => setIsModalOpen(false)}
                    >
                      إلغاء
                    </Button>
                    <Button type="submit">
                      {editingProduct ? "تحديث" : "إضافة"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
