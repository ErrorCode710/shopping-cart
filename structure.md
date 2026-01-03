give me example of this structure on a react app lets say to do app 
1) start form your goal:
	1) Why am i making this project ?
    
	2) Who this project is for ?
	3) What is going to make it valuable ?
	- Write them down and think on them not just surface level problems

     : To practice page routing, statemanagement fetching api
2) Write down what the users must be able to do with the  project 
	1) features
        :Homepage, Shop Page, cart page. User can navigate this pages on the header or nav
        :Home Page will be the list of popular items i think of
        : Shop Page, each card has a increment/decrement button and add to cart
        : The icon on the carts update base on the user add or remove from their cart
        : Cart page, Display items, quantities and allow user to increment and decrement including removal
        : items from fakeStore api or something similar
	2) guardrails
	3) don't overthink with tech stack etc only what features that is needed 
    Vite
	4) user centric approach
3) Define the data models
	1) don't think about the databases
	2) think about the data what you need and how you want to handle it
	3) draw the relationships

    Item {
        id
        quantity
        img
        title
    }
    cart {
        items: [item]
    }

    
4) Nail an MVP
	1) Look back on all the features above and strip it to the barebones and what is needed to make it function : absolute minimum version

			Navigate between 3 pages

			Fetch products

			Add product to cart

			Adjust quantity

			View cart summary
5) Wireframe the project for the most basic user 
	1) think more about UX than UI
	2) paper is cheap but code is expensive
6) Understand the future of the project:
	1) Do you plan to add more features in the future
        NO
	2) Do you plan to work on this for months or just a few days ?
    1-2 weeks
		1) don't over or under engineer
7) How is you project going to be presented 
	1) is it a script or a mobile app or a website or a extension
	2) understand how the users will be interacting and base your architecture on that
8) Tech Stack :
	1) Use the points above to choose the tech stack
	2) don't let the tech stack define the project 
	3) best tool for the project not the other way round
	4) Can you deploy this ?
		1) is the tech stack you are choosing viable for deployment and easy to do so so that you don't spend your time more deploying that building
9) The development process
	1) Bare bones
		1) Folder structure
		2) naming conventions
		3) dev environments
		4) version control
	2) setting up the database and creating the data models
	3) backend routes :
		1) API endpoints
		2) test them
	4) Frontend
	5) Project integration and version
	6) CI/CD
	7) test at all steps

    Examples
    //HOOKS
    const auth = useAuth()
    useState
    useRef

    //EFFECTS
    useEffect..

    //HELPERS
    const calculateCount () => {}

    //EVENT HANDLER
    const handleClick = () => {}

    //EARLY RETURNS

         if(!pagedata) return div loading div

    // RENDER LOGIC
    const buttonName = loading ? loading.. : "ClickName


// PROBLEM
// HOW DO I MAKE SURE FOR ITS CARDS ON THE BOARD ITS A UNIQUE CARD 