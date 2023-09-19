export const logInWithApi = async (page, request, context, email, password) => {
  const response = await request.post(
    `${process.env.API_BASE_URL}/user/login`,
    {
      data: {
        email,
        password,
      }
    }
  )

  const headers = response.headers()
  const cookies = headers['set-cookie'].split('\n')
  const setCookies = []

  for (const cookie of cookies) {
    const pairs = cookie.split('; ')
    const object = {}

    const [name, value] = pairs.shift().split('=')
    object['name'] = name
    object['value'] = value

    for (const pair of pairs) {
      let [key, value] = pair.split('=')

      if (key === 'Expires') {
        value = Date.parse(value) / 1000
      }

      object[`${key.charAt(0).toLowerCase() + key.slice(1)}`] = value || true
    }

    setCookies.push(object)
  }

  await page.goto('/')
  await context.addCookies(setCookies)
  await page.reload()
}
