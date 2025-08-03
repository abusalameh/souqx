import { eq, and, desc } from 'drizzle-orm';
import { db } from './index';
import { 
  businesses, 
  categories, 
  products, 
  bundles, 
  orders, 
  orderItems,
  bundleItems,
  type NewBusiness,
  type NewCategory,
  type NewProduct,
  type NewBundle,
  type NewOrder
} from './schema';
import { generateId, getCurrentTimestamp } from './utils';

// Business operations
export async function createBusiness(data: Omit<NewBusiness, 'id' | 'createdAt' | 'updatedAt'>) {
  const now = getCurrentTimestamp();
  const business = await db.insert(businesses).values({
    id: generateId(),
    ...data,
    createdAt: now,
    updatedAt: now,
  }).returning();
  
  return business[0];
}

export async function getBusinessById(id: string) {
  const business = await db.select().from(businesses).where(eq(businesses.id, id));
  return business[0] || null;
}

export async function getBusinessByOwnerId(ownerId: string) {
  const business = await db.select().from(businesses).where(eq(businesses.ownerId, ownerId));
  return business[0] || null;
}

export async function updateBusiness(id: string, data: Partial<Omit<NewBusiness, 'id' | 'createdAt'>>) {
  const business = await db.update(businesses)
    .set({ ...data, updatedAt: getCurrentTimestamp() })
    .where(eq(businesses.id, id))
    .returning();
  
  return business[0] || null;
}

// Category operations
export async function createCategory(data: Omit<NewCategory, 'id' | 'createdAt' | 'updatedAt'>) {
  const now = getCurrentTimestamp();
  const category = await db.insert(categories).values({
    id: generateId(),
    ...data,
    createdAt: now,
    updatedAt: now,
  }).returning();
  
  return category[0];
}

export async function getCategoriesByBusinessId(businessId: string) {
  return await db.select()
    .from(categories)
    .where(and(eq(categories.businessId, businessId), eq(categories.isActive, true)))
    .orderBy(categories.sortOrder, categories.name);
}

export async function updateCategory(id: string, data: Partial<Omit<NewCategory, 'id' | 'createdAt'>>) {
  const category = await db.update(categories)
    .set({ ...data, updatedAt: getCurrentTimestamp() })
    .where(eq(categories.id, id))
    .returning();
  
  return category[0] || null;
}

export async function deleteCategory(id: string) {
  await db.update(categories)
    .set({ isActive: false, updatedAt: getCurrentTimestamp() })
    .where(eq(categories.id, id));
}

// Product operations
export async function createProduct(data: Omit<NewProduct, 'id' | 'createdAt' | 'updatedAt'>) {
  const now = getCurrentTimestamp();
  const product = await db.insert(products).values({
    id: generateId(),
    ...data,
    createdAt: now,
    updatedAt: now,
  }).returning();
  
  return product[0];
}

export async function getProductsByBusinessId(businessId: string) {
  return await db.select()
    .from(products)
    .where(and(eq(products.businessId, businessId), eq(products.isActive, true)))
    .orderBy(products.sortOrder, products.name);
}

export async function getProductsByCategoryId(categoryId: string) {
  return await db.select()
    .from(products)
    .where(and(eq(products.categoryId, categoryId), eq(products.isActive, true)))
    .orderBy(products.sortOrder, products.name);
}

export async function updateProduct(id: string, data: Partial<Omit<NewProduct, 'id' | 'createdAt'>>) {
  const product = await db.update(products)
    .set({ ...data, updatedAt: getCurrentTimestamp() })
    .where(eq(products.id, id))
    .returning();
  
  return product[0] || null;
}

export async function deleteProduct(id: string) {
  await db.update(products)
    .set({ isActive: false, updatedAt: getCurrentTimestamp() })
    .where(eq(products.id, id));
}

// Bundle operations
export async function createBundle(data: Omit<NewBundle, 'id' | 'createdAt' | 'updatedAt'>) {
  const now = getCurrentTimestamp();
  const bundle = await db.insert(bundles).values({
    id: generateId(),
    ...data,
    createdAt: now,
    updatedAt: now,
  }).returning();
  
  return bundle[0];
}

export async function getBundlesByBusinessId(businessId: string) {
  return await db.select()
    .from(bundles)
    .where(and(eq(bundles.businessId, businessId), eq(bundles.isActive, true)))
    .orderBy(bundles.sortOrder, bundles.name);
}

export async function addProductToBundle(bundleId: string, productId: string, quantity: number = 1) {
  await db.insert(bundleItems).values({
    id: generateId(),
    bundleId,
    productId,
    quantity,
  });
}

export async function removeProductFromBundle(bundleId: string, productId: string) {
  await db.delete(bundleItems)
    .where(and(eq(bundleItems.bundleId, bundleId), eq(bundleItems.productId, productId)));
}

// Order operations
export async function createOrder(data: Omit<NewOrder, 'id' | 'createdAt' | 'updatedAt'>) {
  const now = getCurrentTimestamp();
  const order = await db.insert(orders).values({
    id: generateId(),
    ...data,
    createdAt: now,
    updatedAt: now,
  }).returning();
  
  return order[0];
}

export async function getOrdersByBusinessId(businessId: string) {
  return await db.select()
    .from(orders)
    .where(eq(orders.businessId, businessId))
    .orderBy(desc(orders.createdAt));
}

export async function updateOrderStatus(id: string, status: string) {
  const order = await db.update(orders)
    .set({ status, updatedAt: getCurrentTimestamp() })
    .where(eq(orders.id, id))
    .returning();
  
  return order[0] || null;
}

export async function addOrderItem(orderId: string, item: {
  productId?: string;
  bundleId?: string;
  name: string;
  price: number;
  quantity: number;
}) {
  await db.insert(orderItems).values({
    id: generateId(),
    orderId,
    ...item,
  });
}