import { expect } from 'chai';
import * as sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';

describe('CarService', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('create', function () {
    it('should return a new car', async function () {
      const carInput: ICar = {
        model: 'model',
        year: 2020,
        color: 'color',
        status: true,
        buyValue: 1000,
        doorsQty: 4,
        seatsQty: 5,
      };

      const carOutput: ICar = {
        id: '633ec9fa3df977e30e993492',
        model: 'model',
        year: 2020,
        color: 'color',
        status: true,
        buyValue: 1000,
        doorsQty: 4,
        seatsQty: 5,
      };

      sinon.stub(Model, 'create').resolves(carOutput);

      const service = new CarService();
      const result = await service.create(carInput);

      expect(result).to.be.deep.equal(carOutput);
    });
  });

  describe('findAll', function () {
    it('should return a list of cars', async function () {
      const carOutput: ICar[] = [
        { 
          id: '633ec9fa3df977e30e993492',
          model: 'model',
          year: 2020,
          color: 'color',
          status: true,
          buyValue: 1000,
          doorsQty: 4,
          seatsQty: 5,
        }, {
          id: '633ec9fa3df977e30e993493',
          model: 'model',
          year: 2020,
          color: 'color',
          status: true,
          buyValue: 1000,
          doorsQty: 4,
          seatsQty: 5,
        },
      ];

      sinon.stub(Model, 'find').resolves(carOutput);

      const service = new CarService();
      const result = await service.findAll();

      expect(result).to.be.deep.equal(carOutput);
    });
  });

  describe('findById', function () {
    it('should return a car by id', async function () {
      const carOutput: ICar = {
        id: '633ec9fa3df977e30e993492',
        model: 'model',
        year: 2020,
        color: 'color',
        status: true,
        buyValue: 1000,
        doorsQty: 4,
        seatsQty: 5,
      };

      sinon.stub(Model, 'findById').resolves(carOutput);

      const service = new CarService();
      const result = await service.findById('633ec9fa3df977e30e993492');

      expect(result).to.be.deep.equal(carOutput);
    });

    it('should return null if car not found', async function () {
      sinon.stub(Model, 'findById').resolves(null);

      const service = new CarService();
      const result = await service.findById('633ec9fa3df977e30e993492');

      expect(result).to.be.equal(null);
    });

    it('should throw an error if id is invalid', async function () {
      const service = new CarService();

      try {
        await service.findById('633ec9fa3df977e30e99349');
      } catch (err) {
        expect(err).to.be.an('error');
      }
    });
  });

  describe('update', function () {
    it('should return a updated car', async function () {
      const carInput: ICar = {
        model: 'model',
        year: 2020,
        color: 'color',
        status: true,
        buyValue: 1000,
        doorsQty: 4,
        seatsQty: 5,
      };

      const carOutput: ICar = {
        id: '633ec9fa3df977e30e993492',
        model: 'model',
        year: 2020,
        color: 'color',
        status: true,
        buyValue: 1000,
        doorsQty: 4,
        seatsQty: 5,
      };

      sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

      const service = new CarService();
      const result = await service.update('633ec9fa3df977e30e993492', carInput);

      expect(result).to.be.deep.equal(carOutput);
    });

    it('should throw an error if id is invalid', async function () {
      const invalidId = '633ec9fa3df977e30e99349';
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      const service = new CarService();

      try {
        const carInput: ICar = {
          model: 'model',
          year: 2020,
          color: 'color',
          status: true,
          buyValue: 1000,
          doorsQty: 4,
          seatsQty: 5,
        };
        await service.update(invalidId, carInput);
      } catch (err) {
        expect(err).to.be.an('error');
      }
    });

    it('should throw an error if car not found', async function () {
      const carInput: ICar = {
        model: 'model',
        year: 2020,
        color: 'color',
        status: true,
        buyValue: 1000,
        doorsQty: 4,
        seatsQty: 5,
      };
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      const service = new CarService();

      try {
        const result = await service.update('633ec9fa3df977e30e993492', carInput);

        expect(result).to.be.equal(null);
      } catch (err) {
        expect(err).to.be.an('error');
      }
    });
  });

  describe('delete', function () {
    it('should return a deleted car', async function () {
      const carOutput: ICar = {
        id: '633ec9fa3df977e30e993492',
        model: 'model',
        year: 2020,
        color: 'color',
        status: true,
        buyValue: 1000,
        doorsQty: 4,
        seatsQty: 5,
      };

      sinon.stub(Model, 'findByIdAndDelete').resolves(carOutput);

      const service = new CarService();
      const result = await service.delete('633ec9fa3df977e30e993492');

      expect(result).to.be.deep.equal(carOutput);
    });
  });
});