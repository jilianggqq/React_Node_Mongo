## The general lifecycle

1. Overall the mounting process has 4 lifecycle methods. They are invoked in the following order:

   * constructor()
   * componentWillMount()
   * render()
   * componentDidMount()

2. the update lifecycle of a component that happens when the state or the props change?
   Overall it has 5 lifecycle methods in the following order:

   * componentWillReceiveProps()
   * shouldComponentUpdate()
   * componentWillUpdate()
   * render()
   * componentDidUpdate()

3. there is the unmounting lifecycle. It has only one lifecycle method: componen-
   tWillUnmount().

   * componentWillUnmount() .

4. the introduction of lifecycle methods listed as following, it is good to know that
   each lifecycle method can be used for specific use cases.
   * **constructor(props)** - It is called when the component gets initialized. You can set an initial component state and bind class methods during that lifecycle method.
   * **componentWillMount()** - It is called before the render() lifecycle method. That’s why it could be used to set internal component state, because it will not trigger a second rendering of the component. **Generally it is recommended to use the constructor() to set the initial state.**
   * **render()** - This lifecycle method is mandatory and returns the elements as an output of the component. The method should be pure and therefore **shouldn’t modify the component state.** It gets an input as props and state and returns an element.
   * **componentDidMount()** - It is called only once when the component mounted. **_That’s the perfect time to do an asynchronous request_** to fetch data from an API. The fetched data would get stored in the internal component state to display it in the render() lifecycle method.
   * **componentWillReceiveProps(nextProps)** - The lifecycle method is called during an update lifecycle. As input you get the next props. You can diff the next props with the previous props, by using this.props, to apply a different behavior based on the diff. Additionally, **you can set state based on the next props.**
   * **shouldComponentUpdate(nextProps, nextState)** - It is always called when the component updates due to state or props changes. You will use it in mature React applications for performance optimizations. Depending on a boolean that you return from this lifecycle method, the component and all its children will render or will not render on an update lifecycle. You can prevent the render lifecycle method of a component.
   * **componentWillUpdate(nextProps, nextState)** - The lifecycle method is immediately invoked before the render() method. You already have the next props and next state at your disposal. **_You can use the method as last opportunity to perform preparations before the render method gets executed._** Note that you cannot trigger setState() anymore. If you want to compute state based on the next props, you have to use componentWillReceiveProps() .
   * **componentDidUpdate(prevProps, prevState)** - The lifecycle method is immediately invoked after the render() method. You can use it as opportunity to perform DOM operations or to perform further asynchronous requests.
   * **componentWillUnmount()** - It is called before you destroy your component. You can use the lifecycle method to perform any clean up tasks.
