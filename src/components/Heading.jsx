function Heading(props) {
  return (
    <div className="navbar">
      <div className={"border-b border-b-gray-200 py-8 " + props.foo}>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">lail</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-x-6">
            <li>
              <a>report</a>
            </li>
            <li>
              <a>settings</a>
            </li>
            <li>
              <a>sign in</a>
            </li>
            <li>
              <details>
                <summary>...</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Heading;
