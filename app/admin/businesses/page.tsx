'use client'

import { useState } from 'react'
import { AdminLayout } from '@/components/admin-layout'
import { Heading, Subheading } from '@/components/ui/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Fieldset, Legend, FieldGroup, Field, Label, Description, ErrorMessage } from '@/components/ui/fieldset'
import { PlusIcon, PencilIcon, TrashIcon, MagnifyingGlassIcon, BuildingStorefrontIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'

// Mock data for businesses
const mockBusinesses = [
  {
    id: 1,
    name: 'متجر الإلكترونيات الذكية',
    ownerName: 'أحمد محمد',
    email: 'ahmed@smartelectronics.com',
    phone: '+966501234567',
    address: 'الرياض، حي النخيل، شارع الملك فهد',
    description: 'متجر متخصص في بيع الأجهزة الإلكترونية والهواتف الذكية',
    status: 'active',
    productsCount: 45,
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'بوتيك الأزياء العصرية',
    ownerName: 'فاطمة علي',
    email: 'fatima@fashionboutique.com',
    phone: '+966507654321',
    address: 'جدة، حي الزهراء، شارع التحلية',
    description: 'بوتيك نسائي متخصص في الأزياء العصرية والإكسسوارات',
    status: 'active',
    productsCount: 128,
    createdAt: '2024-01-10',
  },
  {
    id: 3,
    name: 'مطعم الأصالة',
    ownerName: 'محمد السعيد',
    email: 'mohammed@asala-restaurant.com',
    phone: '+966509876543',
    address: 'الدمام، حي الشاطئ، كورنيش الدمام',
    description: 'مطعم يقدم الأكلات الشعبية والعربية الأصيلة',
    status: 'pending',
    productsCount: 0,
    createdAt: '2024-01-05',
  },
  {
    id: 4,
    name: 'صالة الرياضة المتقدمة',
    ownerName: 'خالد أحمد',
    email: 'khalid@advancedgym.com',
    phone: '+966502468135',
    address: 'الرياض، حي العليا، شارع العروبة',
    description: 'صالة رياضية مجهزة بأحدث المعدات والأجهزة',
    status: 'inactive',
    productsCount: 23,
    createdAt: '2024-01-03',
  },
]

export default function BusinessesPage() {
  const [businesses, setBusinesses] = useState(mockBusinesses)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingBusiness, setEditingBusiness] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const [formData, setFormData] = useState({
    name: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    description: '',
    status: 'pending',
  })

  const [errors, setErrors] = useState<any>({})

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || business.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    const newErrors: any = {}
    if (!formData.name.trim()) newErrors.name = 'اسم المتجر مطلوب'
    if (!formData.ownerName.trim()) newErrors.ownerName = 'اسم صاحب المتجر مطلوب'
    if (!formData.email.trim()) newErrors.email = 'البريد الإلكتروني مطلوب'
    if (!formData.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب'
    if (!formData.address.trim()) newErrors.address = 'العنوان مطلوب'
    if (!formData.description.trim()) newErrors.description = 'وصف المتجر مطلوب'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    if (editingBusiness) {
      // Update existing business
      setBusinesses(businesses.map(business => 
        business.id === editingBusiness.id 
          ? { ...business, ...formData }
          : business
      ))
    } else {
      // Add new business
      const newBusiness = {
        id: Math.max(...businesses.map(b => b.id)) + 1,
        ...formData,
        productsCount: 0,
        createdAt: new Date().toISOString().split('T')[0],
      }
      setBusinesses([...businesses, newBusiness])
    }

    // Reset form
    setFormData({
      name: '',
      ownerName: '',
      email: '',
      phone: '',
      address: '',
      description: '',
      status: 'pending',
    })
    setErrors({})
    setIsModalOpen(false)
    setEditingBusiness(null)
  }

  const handleEdit = (business: any) => {
    setEditingBusiness(business)
    setFormData({
      name: business.name,
      ownerName: business.ownerName,
      email: business.email,
      phone: business.phone,
      address: business.address,
      description: business.description,
      status: business.status,
    })
    setIsModalOpen(true)
  }

  const handleDelete = (businessId: number) => {
    const business = businesses.find(b => b.id === businessId)
    if (business && business.productsCount > 0) {
      alert('لا يمكن حذف متجر يحتوي على منتجات. يرجى حذف المنتجات أولاً.')
      return
    }
    
    if (confirm('هل أنت متأكد من حذف هذا المتجر؟')) {
      setBusinesses(businesses.filter(business => business.id !== businessId))
    }
  }

  const handleStatusChange = (businessId: number, newStatus: string) => {
    setBusinesses(businesses.map(business => 
      business.id === businessId 
        ? { ...business, status: newStatus }
        : business
    ))
  }

  const openAddModal = () => {
    setEditingBusiness(null)
    setFormData({
      name: '',
      ownerName: '',
      email: '',
      phone: '',
      address: '',
      description: '',
      status: 'pending',
    })
    setErrors({})
    setIsModalOpen(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'green'
      case 'pending': return 'yellow'
      case 'inactive': return 'red'
      default: return 'zinc'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'نشط'
      case 'pending': return 'في الانتظار'
      case 'inactive': return 'غير نشط'
      default: return status
    }
  }

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Heading>إدارة المتاجر</Heading>
            <Subheading>إدارة المتاجر وأصحاب الأعمال</Subheading>
          </div>
          <Button onClick={openAddModal} className="flex items-center gap-2">
            <PlusIcon className="w-4 h-4" />
            إضافة متجر جديد
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field>
              <Label>البحث</Label>
              <div className="relative mt-2">
                <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <Input
                  type="text"
                  placeholder="البحث بالاسم أو صاحب المتجر أو البريد الإلكتروني..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
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
                <option value="pending">في الانتظار</option>
                <option value="inactive">غير نشط</option>
              </Select>
            </Field>
          </div>
        </div>

        {/* Businesses Table */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>المتجر</TableHeader>
                <TableHeader>صاحب المتجر</TableHeader>
                <TableHeader>معلومات الاتصال</TableHeader>
                <TableHeader>العنوان</TableHeader>
                <TableHeader>المنتجات</TableHeader>
                <TableHeader>الحالة</TableHeader>
                <TableHeader>الإجراءات</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBusinesses.map((business) => (
                <TableRow key={business.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <BuildingStorefrontIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium">{business.name}</div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-1">
                          {business.description}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{business.ownerName}</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <EnvelopeIcon className="w-3 h-3 text-zinc-400" />
                        {business.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <PhoneIcon className="w-3 h-3 text-zinc-400" />
                        {business.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPinIcon className="w-3 h-3 text-zinc-400" />
                      <span className="line-clamp-2">{business.address}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge color="blue">{business.productsCount} منتج</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Badge color={getStatusColor(business.status)}>
                        {getStatusText(business.status)}
                      </Badge>
                      {business.status === 'pending' && (
                        <div className="flex gap-1">
                          <Button
                            plain
                            onClick={() => handleStatusChange(business.id, 'active')}
                            className="p-1 text-green-600 hover:text-green-700"
                            title="قبول"
                          >
                            <EyeIcon className="w-3 h-3" />
                          </Button>
                          <Button
                            plain
                            onClick={() => handleStatusChange(business.id, 'inactive')}
                            className="p-1 text-red-600 hover:text-red-700"
                            title="رفض"
                          >
                            <EyeSlashIcon className="w-3 h-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        plain
                        onClick={() => handleEdit(business)}
                        className="p-1"
                      >
                        <PencilIcon className="w-4 h-4" />
                      </Button>
                      <Button
                        plain
                        onClick={() => handleDelete(business.id)}
                        className="p-1 text-red-600 hover:text-red-700"
                        disabled={business.productsCount > 0}
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
                  {editingBusiness ? 'تعديل المتجر' : 'إضافة متجر جديد'}
                </h3>
                
                <form onSubmit={handleSubmit}>
                  <Fieldset>
                    <FieldGroup>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field>
                          <Label>اسم المتجر</Label>
                          <Input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="أدخل اسم المتجر"
                          />
                          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                        </Field>

                        <Field>
                          <Label>اسم صاحب المتجر</Label>
                          <Input
                            type="text"
                            value={formData.ownerName}
                            onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                            placeholder="أدخل اسم صاحب المتجر"
                          />
                          {errors.ownerName && <ErrorMessage>{errors.ownerName}</ErrorMessage>}
                        </Field>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field>
                          <Label>البريد الإلكتروني</Label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="أدخل البريد الإلكتروني"
                          />
                          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                        </Field>

                        <Field>
                          <Label>رقم الهاتف</Label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="أدخل رقم الهاتف"
                          />
                          {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
                        </Field>
                      </div>

                      <Field>
                        <Label>العنوان</Label>
                        <Input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="أدخل عنوان المتجر"
                        />
                        {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
                      </Field>

                      <Field>
                        <Label>وصف المتجر</Label>
                        <Textarea
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="أدخل وصف المتجر والخدمات المقدمة"
                          rows={3}
                        />
                        {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
                      </Field>

                      <Field>
                        <Label>الحالة</Label>
                        <Select
                          value={formData.status}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        >
                          <option value="pending">في الانتظار</option>
                          <option value="active">نشط</option>
                          <option value="inactive">غير نشط</option>
                        </Select>
                        <Description>
                          المتاجر في الانتظار تحتاج موافقة المدير
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
                      {editingBusiness ? 'تحديث' : 'إضافة'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}