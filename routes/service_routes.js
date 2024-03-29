
const express = require("express")
const {CreateserviceDetails,viewserviceDetails,deleteserviceDetails,updateserviceDetails,getSingleserviceDetails} = require("../controller/service_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     service:
 *       type: object
 *       required:
 *         - serviceId
 *         - serviceName
 *         - categoryId
 *         - Type
 *         - PriceOptionId
 *       properties:
 *         serviceId:
 *           type: integer
 *           description: Autogeneration
 *         serviceName:
 *           type: string
 *           description: serviceName
 *         categoryId:
 *           type: string
 *           description: serviceName
 *         Type:
 *           type: string
 *           description: serviceName
 *         PriceOptionId:
 *           type: string
 *           description: serviceName
 *       example:
 *         serviceId: autoGenerated
 *         serviceName: serviceabc
 *         categoryId: "1245"
 *         Type: type10
 *         PriceOptionId: 1245
 */

/**
 * @swagger
 * /api/v1/category/services:
 *   get:
 *     summary: get all service
 *     tags: [service]
 *     responses:
 *       200:
 *         description: get All service
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/service'
 */
router.route("/category/services").get(viewserviceDetails)


/**
 * @swagger
 * /api/v1/category/service:
 *   post:
 *     summary: add a new service
 *     tags: [service]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/service'
 *     responses:
 *       200:
 *         description: create service successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/service'
 *       500:
 *         description: Some server error
 */
 router.route("/category/service").post(CreateserviceDetails)

 /**
* @swagger
* /api/v1/category/service/{serviceId}:
*   delete:
*     summary: Delete a service
*     tags: [service]
*     parameters:
*         - in: path
*           name: serviceId
*           required: true
*           description: serviceId is required
*           schema:
*              type: string
*     responses:
*       200:
*         description: service deleted successfully
*/

router.route("/category/service/:serviceId").delete(deleteserviceDetails)

/**
 * @swagger
 * /api/v1/category/service/{serviceId}:
 *   put:
 *     summary: update a service
 *     tags: [service]
 *     description: Retrieve a service by their unique ID.
 *     parameters:
 *       - in: path
 *         name: serviceId
 *         required: true
 *         description: ID of the service to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the service
 *       404:
 *         description: service not found
 */
router.route("/category/service/:serviceId").put(updateserviceDetails)

/**
 * @swagger
 * /api/v1/getSingleserviceDetails/{serviceId}:
 *   get:
 *     summary: Get a service by ID
 *     tags: [service]
 *     description: Retrieve a service by their unique ID.
 *     parameters:
 *       - in: path
 *         name: serviceId
 *         required: true
 *         description: ID of the service to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the service
 *       404:
 *         description: service not found
 */
router.route("/service/:serviceId").get(getSingleserviceDetails)
module.exports = router


  