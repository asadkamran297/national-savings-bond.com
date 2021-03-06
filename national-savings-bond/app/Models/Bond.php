<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illiminate\Database\Eloquent\SoftDeletes;

class Bond extends Model
{
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "bonds";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "bond_type_id", 
        "serial_no", 
        "start_date"
    ];

    
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];
}
