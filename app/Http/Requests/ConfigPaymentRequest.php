<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ConfigPaymentRequest extends FormRequest
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
            //'photo' => 'required | mimes:jpeg,jpg,png | max:1000', 
            'client_id' => 'required',
            'client_secret' => 'required', 
            'callback_url' => 'required',
        ];
    }
}
