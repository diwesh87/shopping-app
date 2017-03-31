@extends('dashboard.base')
@section('title', 'List all adverts')
@section('page', 'List Adverts')
@section('body')
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!-- TRANSACTION LIST -->
<table class="table table-hover table-bordered">
	<thead>
		<tr>
			<th>Sn</th>
			<th>Thumbnails</th>
			<th>Uploaded By</th>
			<th>Delete</th>
		</tr>
	</thead>
	<tbody>
		@if ($adverts->count() > 0)
		@foreach($adverts as $advert)
		<tr>
			<td>{{ $loop->index + 1 }}</td>
			<td>{{ $advert->user->name }}</td>
			<td>{{ $advert->advert_photos }}</td>
			<td><a class="delete-user" href="{{ route('delete_advert', ['id' => $advert->id ]) }}" title="Delete {{ $advert->name }}"> <i class="glyphicon glyphicon-trash Delete"></i> Delete</a></td>
		</tr>
		@endforeach
		@endif
	</tbody>
</table>
<p>
	@if ($adverts->count() > 0)
	{!! $adverts->render() !!}
	@endif
</p>
@endsection