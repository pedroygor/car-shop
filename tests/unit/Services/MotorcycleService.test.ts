import { expect } from 'chai';
import * as sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('MotorcycleService', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('create', function () {
    it('should return a new motorcycle', async function () {
      const motorcycleInput: IMotorcycle = {
        model: 'model',
        year: 2020,
        color: 'color',
        status: true,
        buyValue: 1000,
        category: 'Street',
        engineCapacity: 1000,
      };

      const motorcycleOutput: IMotorcycle = {
        id: '633ec9fa3df977e30e993492',
        model: 'model',
        year: 2020,
        color: 'color',
        status: true,
        buyValue: 1000,
        category: 'Street',
        engineCapacity: 1000,
      };

      sinon.stub(Model, 'create').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.create(motorcycleInput);

      expect(result).to.be.deep.equal(motorcycleOutput);
    });
  });

  describe('findAll', function () {
    it('should return a list of motorcycles', async function () {
      const motorcycleOutput: IMotorcycle[] = [
        { 
          id: '633ec9fa3df977e30e993492',
          model: 'model',
          year: 2020,
          color: 'color',
          status: true,
          buyValue: 1000,
          category: 'Street',
          engineCapacity: 1000,
        }, {
          id: '633ec9fa3df977e30e993493',
          model: 'model',
          year: 2020,
          color: 'color',
          status: true,
          buyValue: 1000,
          category: 'Street',
          engineCapacity: 1000,
        },
      ];

      sinon.stub(Model, 'find').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.findAll();

      expect(result).to.be.deep.equal(motorcycleOutput);
    });
  });

  describe('findById', function () {
    it('should return a motorcycle', async function () {
      const motorcycleOutput: IMotorcycle = {
        id: '633ec9fa3df977e30e993492',
        model: 'model',
        year: 2020,
        color: 'color',
        status: true,
        buyValue: 1000,
        category: 'Street',
        engineCapacity: 1000,
      };

      sinon.stub(Model, 'findById').resolves(motorcycleOutput);

      const service = new MotorcycleService();

      const result = await service.findById('633ec9fa3df977e30e993492');

      expect(result).to.deep.equal(motorcycleOutput);
    });

    it('should return a string', async function () {
      const motorcycleOutput: IMotorcycle = {
        id: '633ec9fa3df977e30e993492',
        model: 'model',
        year: 2020,
        color: 'color',
        status: true,
        buyValue: 1000,
        category: 'Street',
        engineCapacity: 1000,
      };

      sinon.stub(Model, 'findById').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.findById('633ec9fa3df977e30e99349');

      expect(result).to.be.equal('Invalid mongo id');
    });

    it('should return undefined', async function () {
      sinon.stub(Model, 'findById').resolves(null);
  
      const service = new MotorcycleService();
      const result = await service.findById('555ec9fa3df977e30e993472');
      
      expect(result).to.be.equal(null);
    });
  });

  describe('update', function () {
    it('should return a motorcycle updated', async function () {
      const motorcycleInput: IMotorcycle = {
        model: 'model',
        year: 2020,
        color: 'red',
        status: true,
        buyValue: 1000,
        category: 'Street',
        engineCapacity: 1000,
      };

      const motorcycleOutput: IMotorcycle = {
        id: '633ec9fa3df977e30e993492',
        model: 'model',
        year: 2020,
        color: 'red',
        status: true,
        buyValue: 1000,
        category: 'Street',
        engineCapacity: 1000,
      };

      sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.update('633ec9fa3df977e30e993492', motorcycleInput);

      expect(result).to.be.deep.equal(motorcycleOutput);
    });
  });

  describe('delete', function () {
    it('should return a motorcycle deleted', async function () {
      const motorcycleOutput: IMotorcycle = {
        id: '633ec9fa3df977e30e993492',
        model: 'model',
        year: 2020,
        color: 'color',
        status: true,
        buyValue: 1000,
        category: 'Street',
        engineCapacity: 1000,
      };

      sinon.stub(Model, 'findByIdAndDelete').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.delete('633ec9fa3df977e30e993492');

      expect(result).to.be.deep.equal(motorcycleOutput);
    });
  });
});
