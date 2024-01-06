function getSign()
{
  return md5(Date.now() + Math.random())
}
