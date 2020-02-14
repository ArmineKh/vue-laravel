<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateCompanieRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|email|',
            'logo' => 'nullable|required'
            'created_at' => 'nullable|date',
            'updated_at' => 'nullable|date'
            // 'logo' => 'dimensions:max_width=11000,max_height=11000'
        ];
    }
}
