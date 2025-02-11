const object1 = { a: 1, b: 2, c: 3 }

const object2 = {
  a: 1,
  b: 2,
  c: 3
}

function destructure1() {
  const { a, b, c } = object1;
}

function destructure2() {
  const {
    a,
    b,
    c
  } = object2;
}

async function request1(api, { bla }, {
  url,
  method = 'get',
  params = null,
  query = params || null,
  headers = null,
  data = null
}) {
  //
}

async function request2({ url, method, params, query, headers, data }) {
  //
}

async function request3({
  url,
  method,
  params,
  query,
  headers,
  data
}) {
  //
}

const request4 = async (api, { bla }, {
  url,
  method = 'get',
  params = null,
  query = params || null,
  headers = null,
  data = null
}) => {}

const request5 = async ({ url, method, params, query, headers, data }) => {}

const request6 = async ({
  url,
  method,
  params,
  query,
  headers,
  data
}) => {}

const object = {
  async request7({ url, method, params, query, headers, data }) {},

  async request8({
    url,
    method,
    params,
    query,
    headers,
    data
  }) {}
}

class Class {
  async request9({ url, method, params, query, headers, data }) {}

  async request10({
    url,
    method,
    params,
    query,
    headers,
    data
  }) {}
}

new Map({
  url,
  method,
  params,
  query,
  headers,
  data
})

request(api, {
  url,
  method: 'get',
  params: null,
  query: params
})

request(api, { bla }, {
  url,
  method: 'get',
  params: null,
  query: params
})
