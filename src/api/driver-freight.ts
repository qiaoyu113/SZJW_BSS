import request from '@/utils/request'
// 司机运费账户

let prefix = '/mock/112'

// 获取司机运费流水列表
export const GetFreightChargeList = (params: any) =>
  request({
    url: `${prefix}/v2/driverBilling/freightCharge/list`,
    method: 'get',
    params
  })
  // 司机运费流水导出
export const ExportFreightChargeList = (params: any) =>
  request({
    url: `${prefix}/v2/driverBilling/freightCharge/export`,
    method: 'get',
    params
  })

// 司机运费流水-标记收款
export const ReceiveFreightChargeList = (data: any) =>
  request({
    url: `${prefix}/v2/driverBilling/freightCharge/receive`,
    method: 'post',
    data
  })
// 获取司机运费月账单列表
export const GetMonthlyBillList = (params: any) =>
  request({
    url: `${prefix}/v2/driverBilling/monthlyBill/list`,
    method: 'get',
    params
  })

// 司机运费月账单导出
export const ExportMonthlyBillList = (params: any) =>
  request({
    url: `${prefix}/v2/driverBilling/monthlyBill/export`,
    method: 'get',
    params
  })

// 司机对账月账单保存
export const driverMonthlyBillCheck = (params: any) =>
  request({
    url: `${prefix}/v2/driverBilling/monthlyBill/check`,
    method: 'get',
    params
  })
