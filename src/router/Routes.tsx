import { Navigate, createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../core-ui/RootLayout/RootLayout';
import { BoardLayout } from '../core-ui/BoardLayout/BoardLayout';
import { Board } from '../views/Board/Board';
import { Boards } from '../views/Boards/Boards';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <div>
        <h3>Something went wrong.</h3>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="boards" />,
      },
      {
        path: 'boards',
        element: <BoardLayout />,
        errorElement: (
          <div>
            <h3>Something went wrong.</h3>
          </div>
        ),
        children: [
          {
            index: true,
            element: <Boards />,
          },
          {
            path: ':boardId',
            element: <Board />,
          },
        ],
      },

      {
        path: '*',
        element: (
          <div>
            <h2>Not Found!</h2>
          </div>
        ),
      },
    ],
  },
]);
