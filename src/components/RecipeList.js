import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';
import { recipes } from '../tempList';
import { returnStatement } from '@babel/types';

export default class RecipeList extends Component {
   
    render() {
        const {recipe, handleDetails, value, handleSubmit, handleChange, error} = this.props;
        return (
            <React.Fragment>
           <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
           <div className = "container my-5">
           {/* title */}
           <div className="row">
               <div className= "col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                   <h1 className="text-slanted">recipe list</h1>
               </div>

           </div> 
           {/* title */}
           <div className="row">
           {error?<h1 className="text-danger tetx-center">{error}</h1> : (
                   recipes.map((recipe)=>{
                     return(
                         <Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={handleDetails}/>
                     )
                   })
           )}
           </div>
           </div>
            </React.Fragment>
        )
    }
}
