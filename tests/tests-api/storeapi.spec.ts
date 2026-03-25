import { test, expect } from '@playwright/test';
import { APIClient } from '../../utilis/apiClient';
import { orderData } from '../../utilis/testdata';
test('STORE API - Order Flow', async ({ request }) => {

  const api = new APIClient(request);

  const createRes = await api.placeOrder(orderData);
  expect(createRes.status()).toBe(200);

  const createBody = await createRes.json();
  console.log('ORDER CREATED:', createBody);

  const orderId = createBody.id;

  const getRes = await api.getOrder(orderId);
  expect(getRes.status()).toBe(200);

  const getBody = await getRes.json();
  expect(getBody.id).toBe(orderId);

  const deleteRes = await api.deleteOrder(orderId);
  expect(deleteRes.status()).toBe(200);
});