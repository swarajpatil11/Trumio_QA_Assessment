import { request, APIRequestContext } from '@playwright/test';

export class APIClient {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }


  async addPet(payload: any) {
    return await this.request.post('https://petstore.swagger.io/v2/pet', {
      data: payload
    });
  }

  async getPetById(petId: number) {
    return await this.request.get(`https://petstore.swagger.io/v2/pet/${petId}`);
  }

  async updatePet(payload: any) {
    return await this.request.put('https://petstore.swagger.io/v2/pet', {
      data: payload
    });
  }

  async deletePet(petId: number) {
    return await this.request.delete(`https://petstore.swagger.io/v2/pet/${petId}`);
  }


  async placeOrder(payload: any) {
    return await this.request.post('https://petstore.swagger.io/v2/store/order', {
      data: payload
    });
  }

  async getOrder(orderId: number) {
    return await this.request.get(`https://petstore.swagger.io/v2/store/order/${orderId}`);
  }

  async deleteOrder(orderId: number) {
    return await this.request.delete(`https://petstore.swagger.io/v2/store/order/${orderId}`);
  }
}