import * as React from 'react';

interface GridHooksContext {
  /**
   * Total number of rows in table. Must be set in cell hook or in GridHooksTable prop.
   */
  numRows?: number;
  /**
   * Total number of columns in table. Must be set in cell hook or in GridHooksTable prop.
   */
  numCols?: number;
  /**
   * An ID for the table, must be unique for every table in page. Must be set in cell hook or in GridHooksTable prop.
   */
  tableId?: string;
  /**
   * If true, navigation will wrap around the table. If false, navigation stops at table edge.
   */
  wrap?: boolean;
}

export const GridHooksContext = React.createContext<GridHooksContext>({});

export const GridHooksTable: React.FC<GridHooksContext> = props => (
  <GridHooksContext.Provider value={props}>
    {props.children}
  </GridHooksContext.Provider>
);
