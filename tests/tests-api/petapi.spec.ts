import { test, expect } from '@playwright/test';
import { APIClient } from '../../utilis/apiClient';
import { petData, updatedPetData } from '../../utilis/testdata';
test('PET API - Full CRUD Flow', async ({ request }) => {

  const api = new APIClient(request);

  const createRes = await api.addPet(petData);
  expect(createRes.status()).toBe(200);

  const createBody = await createRes.json();
  console.log('CREATE RESPONSE:', createBody);
  expect(createBody.name).toBe(petData.name);

  const petId = createBody.id;

  const getRes = await api.getPetById(petId);
  expect(getRes.status()).toBe(200);

  const getBody = await getRes.json();
  expect(getBody.id).toBe(petId);

  updatedPetData.id = petId;

  const updateRes = await api.updatePet(updatedPetData);
  expect(updateRes.status()).toBe(200);

  const updateBody = await updateRes.json();
  expect(updateBody.name).toBe(updatedPetData.name);

  const deleteRes = await api.deletePet(petId);
  expect(deleteRes.status()).toBe(200);
});