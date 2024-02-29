# react-router Post

- createBrowserRouter
- [path, element, loader, action, errorElement]
- loader (Generally GET call for that particular route)
  - useLoaderData()
  - useNavigation() navigation.state (loading, idle, submitting)
- action (Generally POST, PATCH, PUT, DELETE for that particular route)
- <Outlet> placeholder for child route elements or allows nested UI for child routes
- <NavLink> Allows client side routing with ({ isActive, isPending })
- <Link> Allows client side routing
