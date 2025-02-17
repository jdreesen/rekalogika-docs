---
title: Introduction
---

`rekalogika/mapper` is an object mapper for PHP and Symfony, also commonly known
as an automapper. It maps an object to another object. Primarily used to map an
entity to a DTO, but also useful for other mapping purposes. It removes the
complexity of mapping an object to another object, and even an object graph to
another object graph.

## Synopsis

```php
use App\Entity\Book;
use Rekalogika\Mapper\MapperInterface;

/** @var MapperInterface $mapper */
/** @var Book $book */

$result = $mapper->map($book, BookDto::class);

// or map to an existing object

$bookDto = new BookDto();
$mapper->map($book, $bookDto);
```

## Why Use a Mapper?

Why do we need to use a mapper to save a few keystrokes, and not just use
something simple like this?

```php
class BookDto
{
    public static function create(Book $book): self
    {
        $dto = new self();
        // ...

        return $dto;
    }
}
```

Everyone must have that idea at some point. However, as the project grows, the
target classes (DTOs) may start to reference each other, and become a rich
object graph. Your code will start to have many special cases, and is no longer
as simple as you thought it would be. It becomes harder to maintain, and then
eventually forces you to sit back and try to resolve the problem. When (if?) you
successfully engineer a solution, you will end up with something that resembles
a mapping framework anyway.

Mapping can be simple, but can also become a highly complex task. A mapper is
created out of necessity to handle the complexity, not just as a means of saving
a few keystrokes.

## Features

* Automatically lists the properties of the source and target, detects their
  types, and maps them accordingly.
* By default, does not attempt to circumvent your class constraints. Reads only
  from and writes only to public properties, getters, setters. Does not
  instantiate objects without their constructor.
* Override the mapping logic using a custom property mapper.
* Constructor initialization.
* Handles nested objects.
* Handles recursion and circular references.
* Inheritance support. Maps to abstract classes and interfaces using an
  inheritance map attribute.
* Reads the type from PHP type declaration and PHPDoc annotations, including
  the type of the nested objects.
* If possible, target objects are lazy-loaded. The mapping does not take place
  until the target is accessed.
* Attempts to detect identifier properties on the source side. Those properties
  on the target side will be mapped eagerly, and will not trigger the hydration.
  Thus, API Platform will be able to generate IRIs without causing the hydration
  of the entire object graph.
* Handles the mapping between `array` or array-like objects, as well as using an
  adder method.
* Handles non-string & non-integer keys in array-like objects, including
  `SplObjectStorage`.
* Lazy loading & lazy stream mapping with collection types. Consumes less memory
  & avoids hydrating a Doctrine collection prematurely.
* With lazy loading, if the source is a `Countable`, then the target will also
  be a `Countable`. With an extra-lazy Doctrine Collection, the consumer will be
  able to count the target without causing a full hydration of the source.
* Manual mapping using a class method.
* Easy to extend by creating new transformers, or decorating the existing ones.
* Match classes using attributes in your transformers, in addition to using
  class names.
* Helpful exception messages.
* Console commands for debugging.
* Data collector and profiler integration.
* Coded from the start using PHP 8, strict types, and maxed-out PHPStan and
  Psalm.

## Future Features

* Option to read & write to private properties.
* Migrate engine to `symfony/type-info`.
* Auto-detect static factory method.
* Use our own interface for proxy objects.
* `MapFrom` and `MapTo` attributes.
* Support `ramsey/uuid`
* Improve non-framework usage.

## License

MIT

## Contributing

Issues and pull requests should be filed in the GitHub repository
[rekalogika/mapper](https://github.com/rekalogika/mapper).