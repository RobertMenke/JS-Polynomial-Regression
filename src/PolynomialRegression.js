import Matrix from './Matrix';
import { sumX, sumXTimesY, sumY } from './utils';

/*
 * @param theData
 * @param degrees
 * @constructor
 */
export default class PolynomialRegression {
  /**
   *
   * @param {Array} list
   * @param {Number} degrees
   * @returns {PolynomialRegression}
   */
  static read(list, degrees) {
    const dataPoints = list.map(({ x, y }) => ({ x, y }));

    return new PolynomialRegression(dataPoints, degrees);
  }

  constructor(dataPoints, degrees) {
    //private object variables
    this.data = dataPoints;
    this.degree = degrees;
    this.matrix = new Matrix();
    this.leftMatrix = [];
    this.rightMatrix = [];

    this.generateLeftMatrix();
    this.generateRightMatrix();
  }

  /**
   * generate the left matrix
   */
  generateLeftMatrix() {
    for (let i = 0; i <= this.degree; i++) {
      this.leftMatrix.push([]);
      for (let j = 0; j <= this.degree; j++) {
        if (i === 0 && j === 0) {
          this.leftMatrix[i][j] = this.data.length;
        } else {
          this.leftMatrix[i][j] = sumX(this.data, i + j);
        }
      }
    }
  }

  /**
   * generates the right hand matrix
   */
  generateRightMatrix() {
    for (let i = 0; i <= this.degree; i++) {
      if (i === 0) {
        this.rightMatrix[i] = sumY(this.data, 1);
      } else {
        this.rightMatrix[i] = sumXTimesY(this.data, i);
      }
    }
  }

  /**
   * gets the terms for a polynomial
   * @returns {*}
   */
  getTerms() {
    return this.matrix.gaussianJordanElimination(
      this.leftMatrix,
      this.rightMatrix,
    );
  }

  /**
   * Predicts the Y value of a data set based on polynomial coefficients and the value of an independent variable
   * @param terms
   * @param x
   * @returns {number}
   */
  predictY(terms, x) {
    let result = 0;
    for (let i = terms.length - 1; i >= 0; i--) {
      if (i === 0) {
        result += terms[i];
      } else {
        result += terms[i] * Math.pow(x, i);
      }
    }
    return result;
  }
}
