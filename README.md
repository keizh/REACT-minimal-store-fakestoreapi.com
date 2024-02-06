fakestoreapi.com

Assignment 1: home page : 27:00

------------------------------------------------------------------------------------------------>

Assignment 2:
react-router-dom home page ---> DONE
Details component when you click an card, detials of the item you want to sell. 48:47 --> DONE

Bring the data through APi calling , while centralizzing the API , outsource axios also util , create an axiso with base url --> DONE

utils ->> all the context

55:28

Render all the Data on Home Page

Loading on home to display while data is stilling getting fetched -conditional rendering

& once entire data has been fetched displaying all the items on home
1:00:00

once you click on the a component new items gets apponed , customize details depending on the items click
in detail fetch dating using diffeirent route

when ever we are retriving data ; present loading if data not yet there.

------------------------------------------------------------------------------------------------>

Assignment 3: Category wise filtering 1:09:30

unique categories on nav

unique random coloring to each category.

filtering on home page based on categories api fetching fakestoreapi

?category=onoooi

useLocation()

decodeURIComponent() --> url to normal sting

on click a category unable to go to a home page

route => / Details
dynamic route => /Details/:
sub route => part of route itself to used for filtering , useLocation /?

function needed : when you go to a category those items get displayed when you go back home all the categories get displayed as no category gets chosen back

what is filted_data --> data that is filtered | data is same but has gone through filtering but filtering condition was nothing at all

ALERT => when your data is getting fetched with api fetching and when you are dealing with api fetched data make sure to only asign it do somewith withit in useEffect hook.
As async data takes time to get fetched and tehe browser is painted first so it is will render.

----------------------->
REACT ROUTER NOTE

> Link & NavLink are only used to chnahe whats there in the top url
> if a route is not istablished it will not take it to a different url

> ROUTE'S THAT WE PUT INSIDE ROUTES will either be a route or a dynamic route that will always lead to a new component

/

/user ->user component
/user/:name -> userDetais component that could either be inside the user route or beside it
/details/:id

> using an url pattern like ?category=fewfwe ; is used to do something within the component itself
> as it can be read inside the component itself and will not be used to chnahe coponents
> ----------------------->

1:35

go back to home butoon in nav -> conditoinally rendered when category chosen

search PathName = use

pathname: This property represents the path part of the URL. It contains the path that was matched for the current route. For example, if your URL is /user/profile, the pathname would be
/user/profile.

search: This property represents the query parameters part of the URL. It contains the query string part of the URL, including the ? character and any query parameters. For example, if your URL is /user/profile?tab=posts, the search would be ?tab=posts.
