'use strict';

const Plan = require('./Plan');
const Subscription = require('./Subscription')
const UsageRecord = require('./UsageRecord')

const disableBilling = process.env.SHOPIFY_DISABLE_BILLING === 'true';

module.exports = !disableBilling ? {
  plan: Plan,
  subscription: Subscription,
  'usage-record': UsageRecord,
} : {};
