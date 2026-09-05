// 生成的内嵌测试数据：来自官方 JSON-Schema-Test-Suite draft2020-12
// (https://github.com/json-schema-org/JSON-Schema-Test-Suite, tests/draft2020-12)
// 由脚本生成，请勿手工编辑。

///|
let suite_additionalProperties =
  #|[
  #|    {
  #|        "description":
  #|            "additionalProperties being false does not allow other properties",
  #|        "specification": [ { "core":"10.3.2.3", "quote": "The value of \"additionalProperties\" MUST be a valid JSON Schema. Boolean \"false\" forbids everything." } ],
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {"foo": {}, "bar": {}},
  #|            "patternProperties": { "^v": {} },
  #|            "additionalProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "no additional properties is valid",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an additional property is invalid",
  #|                "data": {"foo" : 1, "bar" : 2, "quux" : "boom"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores arrays",
  #|                "data": [1, 2, 3],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores strings",
  #|                "data": "foobarbaz",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores other non-objects",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "patternProperties are not additional properties",
  #|                "data": {"foo":1, "vroom": 2},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "non-ASCII pattern with additionalProperties",
  #|        "specification": [ { "core":"10.3.2.3"} ],
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "patternProperties": {"^á": {}},
  #|            "additionalProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "matching the pattern is valid",
  #|                "data": {"ármányos": 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "not matching the pattern is invalid",
  #|                "data": {"élmény": 2},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "additionalProperties with schema",
  #|        "specification": [ { "core":"10.3.2.3", "quote": "The value of \"additionalProperties\" MUST be a valid JSON Schema." } ],
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {"foo": {}, "bar": {}},
  #|            "additionalProperties": {"type": "boolean"}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "no additional properties is valid",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an additional valid property is valid",
  #|                "data": {"foo" : 1, "bar" : 2, "quux" : true},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an additional invalid property is invalid",
  #|                "data": {"foo" : 1, "bar" : 2, "quux" : 12},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "additionalProperties can exist by itself",
  #|        "specification": [ { "core":"10.3.2.3", "quote": "With no other applicator applying to object instances. This validates all the instance values irrespective of their property names" } ],
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "additionalProperties": {"type": "boolean"}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "an additional valid property is valid",
  #|                "data": {"foo" : true},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an additional invalid property is invalid",
  #|                "data": {"foo" : 1},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "additionalProperties are allowed by default",
  #|        "specification": [ { "core":"10.3.2.3", "quote": "Omitting this keyword has the same assertion behavior as an empty schema." } ],
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {"foo": {}, "bar": {}}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "additional properties are allowed",
  #|                "data": {"foo": 1, "bar": 2, "quux": true},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "additionalProperties does not look in applicators",
  #|        "specification":[ { "core": "10.2", "quote": "Subschemas of applicator keywords evaluate the instance completely independently such that the results of one such subschema MUST NOT impact the results of sibling subschemas." } ],
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {"properties": {"foo": {}}}
  #|            ],
  #|            "additionalProperties": {"type": "boolean"}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "properties defined in allOf are not examined",
  #|                "data": {"foo": 1, "bar": true},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "additionalProperties with null valued instance properties",
  #|        "specification": [ { "core":"10.3.2.3" } ],
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "additionalProperties": {
  #|                "type": "null"
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "allows null values",
  #|                "data": {"foo": null},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "additionalProperties with propertyNames",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "propertyNames": {
  #|                "maxLength": 5
  #|            },
  #|            "additionalProperties": {
  #|                "type": "number"
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "Valid against both keywords",
  #|                "data": { "apple": 4 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "Valid against propertyNames, but not additionalProperties",
  #|                "data": { "fig": 2, "pear": "available" },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "dependentSchemas with additionalProperties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {"foo2": {}},
  #|            "dependentSchemas": {
  #|                "foo" : {},
  #|                "foo2": {
  #|                    "properties": {
  #|                        "bar": {}
  #|                    }
  #|                }
  #|            },
  #|            "additionalProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "additionalProperties doesn't consider dependentSchemas",
  #|                "data": {"foo": ""},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "additionalProperties can't see bar",
  #|                "data": {"bar": ""},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "additionalProperties can't see bar even when foo2 is present",
  #|                "data": {"foo2": "", "bar": ""},
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_allOf =
  #|[
  #|    {
  #|        "description": "allOf",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "properties": {
  #|                        "bar": {"type": "integer"}
  #|                    },
  #|                    "required": ["bar"]
  #|                },
  #|                {
  #|                    "properties": {
  #|                        "foo": {"type": "string"}
  #|                    },
  #|                    "required": ["foo"]
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "allOf",
  #|                "data": {"foo": "baz", "bar": 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "mismatch second",
  #|                "data": {"foo": "baz"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "mismatch first",
  #|                "data": {"bar": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "wrong type",
  #|                "data": {"foo": "baz", "bar": "quux"},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "allOf with base schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {"bar": {"type": "integer"}},
  #|            "required": ["bar"],
  #|            "allOf" : [
  #|                {
  #|                    "properties": {
  #|                        "foo": {"type": "string"}
  #|                    },
  #|                    "required": ["foo"]
  #|                },
  #|                {
  #|                    "properties": {
  #|                        "baz": {"type": "null"}
  #|                    },
  #|                    "required": ["baz"]
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid",
  #|                "data": {"foo": "quux", "bar": 2, "baz": null},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "mismatch base schema",
  #|                "data": {"foo": "quux", "baz": null},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "mismatch first allOf",
  #|                "data": {"bar": 2, "baz": null},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "mismatch second allOf",
  #|                "data": {"foo": "quux", "bar": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "mismatch both",
  #|                "data": {"bar": 2},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "allOf simple types",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {"maximum": 30},
  #|                {"minimum": 20}
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid",
  #|                "data": 25,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "mismatch one",
  #|                "data": 35,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "allOf with boolean schemas, all true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [true, true]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any value is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "allOf with boolean schemas, some false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [true, false]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any value is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "allOf with boolean schemas, all false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [false, false]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any value is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "allOf with one empty schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {}
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any data is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "allOf with two empty schemas",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {},
  #|                {}
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any data is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "allOf with the first empty schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {},
  #|                { "type": "number" }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "string is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "allOf with the last empty schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                { "type": "number" },
  #|                {}
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "string is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "nested allOf, to check validation semantics",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "allOf": [
  #|                        {
  #|                            "type": "null"
  #|                        }
  #|                    ]
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "null is valid",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "anything non-null is invalid",
  #|                "data": 123,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "allOf combined with anyOf, oneOf",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [ { "multipleOf": 2 } ],
  #|            "anyOf": [ { "multipleOf": 3 } ],
  #|            "oneOf": [ { "multipleOf": 5 } ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "allOf: false, anyOf: false, oneOf: false",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "allOf: false, anyOf: false, oneOf: true",
  #|                "data": 5,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "allOf: false, anyOf: true, oneOf: false",
  #|                "data": 3,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "allOf: false, anyOf: true, oneOf: true",
  #|                "data": 15,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "allOf: true, anyOf: false, oneOf: false",
  #|                "data": 2,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "allOf: true, anyOf: false, oneOf: true",
  #|                "data": 10,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "allOf: true, anyOf: true, oneOf: false",
  #|                "data": 6,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "allOf: true, anyOf: true, oneOf: true",
  #|                "data": 30,
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_anchor =
  #|[
  #|    {
  #|        "description": "Location-independent identifier",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "#foo",
  #|            "$defs": {
  #|                "A": {
  #|                    "$anchor": "foo",
  #|                    "type": "integer"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "data": 1,
  #|                "description": "match",
  #|                "valid": true
  #|            },
  #|            {
  #|                "data": "a",
  #|                "description": "mismatch",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "Location-independent identifier with absolute URI",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "http://localhost:1234/draft2020-12/bar#foo",
  #|            "$defs": {
  #|                "A": {
  #|                    "$id": "http://localhost:1234/draft2020-12/bar",
  #|                    "$anchor": "foo",
  #|                    "type": "integer"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "data": 1,
  #|                "description": "match",
  #|                "valid": true
  #|            },
  #|            {
  #|                "data": "a",
  #|                "description": "mismatch",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "Location-independent identifier with base URI change in subschema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://localhost:1234/draft2020-12/root",
  #|            "$ref": "http://localhost:1234/draft2020-12/nested.json#foo",
  #|            "$defs": {
  #|                "A": {
  #|                    "$id": "nested.json",
  #|                    "$defs": {
  #|                        "B": {
  #|                            "$anchor": "foo",
  #|                            "type": "integer"
  #|                        }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "data": 1,
  #|                "description": "match",
  #|                "valid": true
  #|            },
  #|            {
  #|                "data": "a",
  #|                "description": "mismatch",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "same $anchor with different base uri",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://localhost:1234/draft2020-12/foobar",
  #|            "$defs": {
  #|                "A": {
  #|                    "$id": "child1",
  #|                    "allOf": [
  #|                        {
  #|                            "$id": "child2",
  #|                            "$anchor": "my_anchor",
  #|                            "type": "number"
  #|                        },
  #|                        {
  #|                            "$anchor": "my_anchor",
  #|                            "type": "string"
  #|                        }
  #|                    ]
  #|                }
  #|            },
  #|            "$ref": "child1#my_anchor"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "$ref resolves to /$defs/A/allOf/1",
  #|                "data": "a",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "$ref does not resolve to /$defs/A/allOf/0",
  #|                "data": 1,
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_anyOf =
  #|[
  #|    {
  #|        "description": "anyOf",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "anyOf": [
  #|                {
  #|                    "type": "integer"
  #|                },
  #|                {
  #|                    "minimum": 2
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "first anyOf valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "second anyOf valid",
  #|                "data": 2.5,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "both anyOf valid",
  #|                "data": 3,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "neither anyOf valid",
  #|                "data": 1.5,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "anyOf with base schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "string",
  #|            "anyOf" : [
  #|                {
  #|                    "maxLength": 2
  #|                },
  #|                {
  #|                    "minLength": 4
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "mismatch base schema",
  #|                "data": 3,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "one anyOf valid",
  #|                "data": "foobar",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "both anyOf invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "anyOf with boolean schemas, all true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "anyOf": [true, true]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any value is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "anyOf with boolean schemas, some true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "anyOf": [true, false]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any value is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "anyOf with boolean schemas, all false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "anyOf": [false, false]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any value is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "anyOf complex types",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "anyOf": [
  #|                {
  #|                    "properties": {
  #|                        "bar": {"type": "integer"}
  #|                    },
  #|                    "required": ["bar"]
  #|                },
  #|                {
  #|                    "properties": {
  #|                        "foo": {"type": "string"}
  #|                    },
  #|                    "required": ["foo"]
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "first anyOf valid (complex)",
  #|                "data": {"bar": 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "second anyOf valid (complex)",
  #|                "data": {"foo": "baz"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "both anyOf valid (complex)",
  #|                "data": {"foo": "baz", "bar": 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "neither anyOf valid (complex)",
  #|                "data": {"foo": 2, "bar": "quux"},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "anyOf with one empty schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "anyOf": [
  #|                { "type": "number" },
  #|                {}
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "string is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "number is valid",
  #|                "data": 123,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "nested anyOf, to check validation semantics",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "anyOf": [
  #|                {
  #|                    "anyOf": [
  #|                        {
  #|                            "type": "null"
  #|                        }
  #|                    ]
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "null is valid",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "anything non-null is invalid",
  #|                "data": 123,
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_boolean_schema =
  #|[
  #|    {
  #|        "description": "boolean schema 'true'",
  #|        "schema": true,
  #|        "tests": [
  #|            {
  #|                "description": "number is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "string is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "boolean true is valid",
  #|                "data": true,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "boolean false is valid",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "null is valid",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object is valid",
  #|                "data": {"foo": "bar"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "empty object is valid",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "array is valid",
  #|                "data": ["foo"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "empty array is valid",
  #|                "data": [],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "boolean schema 'false'",
  #|        "schema": false,
  #|        "tests": [
  #|            {
  #|                "description": "number is invalid",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "string is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "boolean true is invalid",
  #|                "data": true,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "boolean false is invalid",
  #|                "data": false,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "null is invalid",
  #|                "data": null,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "object is invalid",
  #|                "data": {"foo": "bar"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty object is invalid",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "array is invalid",
  #|                "data": ["foo"],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty array is invalid",
  #|                "data": [],
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_const =
  #|[
  #|    {
  #|        "description": "const validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": 2
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "same value is valid",
  #|                "data": 2,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "another value is invalid",
  #|                "data": 5,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "another type is invalid",
  #|                "data": "a",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "const with object",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": {"foo": "bar", "baz": "bax"}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "same object is valid",
  #|                "data": {"foo": "bar", "baz": "bax"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "same object with different property order is valid",
  #|                "data": {"baz": "bax", "foo": "bar"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "another object is invalid",
  #|                "data": {"foo": "bar"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "another type is invalid",
  #|                "data": [1, 2],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "const with array",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": [{ "foo": "bar" }]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "same array is valid",
  #|                "data": [{"foo": "bar"}],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "another array item is invalid",
  #|                "data": [2],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "array with additional items is invalid",
  #|                "data": [1, 2, 3],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "const with null",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": null
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "null is valid",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "not null is invalid",
  #|                "data": 0,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "const with false does not match 0",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "false is valid",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "integer zero is invalid",
  #|                "data": 0,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "float zero is invalid",
  #|                "data": 0.0,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "const with true does not match 1",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": true
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "true is valid",
  #|                "data": true,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "integer one is invalid",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "float one is invalid",
  #|                "data": 1.0,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "const with [false] does not match [0]",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": [false]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "[false] is valid",
  #|                "data": [false],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[0] is invalid",
  #|                "data": [0],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "[0.0] is invalid",
  #|                "data": [0.0],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "const with [true] does not match [1]",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": [true]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "[true] is valid",
  #|                "data": [true],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[1] is invalid",
  #|                "data": [1],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "[1.0] is invalid",
  #|                "data": [1.0],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "const with {\"a\": false} does not match {\"a\": 0}",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": {"a": false}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "{\"a\": false} is valid",
  #|                "data": {"a": false},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "{\"a\": 0} is invalid",
  #|                "data": {"a": 0},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "{\"a\": 0.0} is invalid",
  #|                "data": {"a": 0.0},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "const with {\"a\": true} does not match {\"a\": 1}",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": {"a": true}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "{\"a\": true} is valid",
  #|                "data": {"a": true},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "{\"a\": 1} is invalid",
  #|                "data": {"a": 1},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "{\"a\": 1.0} is invalid",
  #|                "data": {"a": 1.0},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "const with 0 does not match other zero-like types",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": 0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "false is invalid",
  #|                "data": false,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "integer zero is valid",
  #|                "data": 0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "float zero is valid",
  #|                "data": 0.0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "empty object is invalid",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty array is invalid",
  #|                "data": [],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty string is invalid",
  #|                "data": "",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "const with 1 does not match true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": 1
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "true is invalid",
  #|                "data": true,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "integer one is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "float one is valid",
  #|                "data": 1.0,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "const with -2.0 matches integer and float types",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": -2.0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "integer -2 is valid",
  #|                "data": -2,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "integer 2 is invalid",
  #|                "data": 2,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "float -2.0 is valid",
  #|                "data": -2.0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "float 2.0 is invalid",
  #|                "data": 2.0,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "float -2.00001 is invalid",
  #|                "data": -2.00001,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "float and integers are equal up to 64-bit representation limits",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": 9007199254740992
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "integer is valid",
  #|                "data": 9007199254740992,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "integer minus one is invalid",
  #|                "data": 9007199254740991,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "float is valid",
  #|                "data": 9007199254740992.0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "float minus one is invalid",
  #|                "data": 9007199254740991.0,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "nul characters in strings",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": "hello\u0000there"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "match string with nul",
  #|                "data": "hello\u0000there",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "do not match string lacking nul",
  #|                "data": "hellothere",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "characters with the same visual representation but different codepoint",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": "μ",
  #|            "$comment": "U+03BC"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "character uses the same codepoint",
  #|                "data": "μ",
  #|                "comment": "U+03BC",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "character looks the same but uses a different codepoint",
  #|                "data": "µ",
  #|                "comment": "U+00B5",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "characters with the same visual representation, but different number of codepoints",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "const": "ä",
  #|            "$comment": "U+00E4"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "character uses the same codepoint",
  #|                "data": "ä",
  #|                "comment": "U+00E4",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "character looks the same but uses combining marks",
  #|                "data": "ä",
  #|                "comment": "a, U+0308",
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_contains =
  #|[
  #|    {
  #|        "description": "contains keyword validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {"minimum": 5}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "array with item matching schema (5) is valid",
  #|                "data": [3, 4, 5],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "array with item matching schema (6) is valid",
  #|                "data": [3, 4, 6],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "array with two items matching schema (5, 6) is valid",
  #|                "data": [3, 4, 5, 6],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "array without items matching schema is invalid",
  #|                "data": [2, 3, 4],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty array is invalid",
  #|                "data": [],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "not array is valid",
  #|                "data": {},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "contains keyword with const keyword",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": { "const": 5 }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "array with item 5 is valid",
  #|                "data": [3, 4, 5],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "array with two items 5 is valid",
  #|                "data": [3, 4, 5, 5],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "array without item 5 is invalid",
  #|                "data": [1, 2, 3, 4],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "contains keyword with boolean schema true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": true
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any non-empty array is valid",
  #|                "data": ["foo"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "empty array is invalid",
  #|                "data": [],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "contains keyword with boolean schema false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any non-empty array is invalid",
  #|                "data": ["foo"],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty array is invalid",
  #|                "data": [],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "non-arrays are valid",
  #|                "data": "contains does not apply to strings",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "items + contains",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "items": { "multipleOf": 2 },
  #|            "contains": { "multipleOf": 3 }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "matches items, does not match contains",
  #|                "data": [ 2, 4, 8 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "does not match items, matches contains",
  #|                "data": [ 3, 6, 9 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "matches both items and contains",
  #|                "data": [ 6, 12 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "matches neither items nor contains",
  #|                "data": [ 1, 5 ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "contains with false if subschema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {
  #|                "if": false,
  #|                "else": true
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any non-empty array is valid",
  #|                "data": ["foo"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "empty array is invalid",
  #|                "data": [],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "contains with null instance elements",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {
  #|                "type": "null"
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "allows null items",
  #|                "data": [ null ],
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_content =
  #|[
  #|    {
  #|        "description": "validation of string-encoded content based on media type",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contentMediaType": "application/json"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a valid JSON document",
  #|                "data": "{\"foo\": \"bar\"}",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an invalid JSON document; validates true",
  #|                "data": "{:}",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores non-strings",
  #|                "data": 100,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "validation of binary string-encoding",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contentEncoding": "base64"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a valid base64 string",
  #|                "data": "eyJmb28iOiAiYmFyIn0K",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an invalid base64 string (% is not a valid character); validates true",
  #|                "data": "eyJmb28iOi%iYmFyIn0K",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores non-strings",
  #|                "data": 100,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "validation of binary-encoded media type documents",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contentMediaType": "application/json",
  #|            "contentEncoding": "base64"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a valid base64-encoded JSON document",
  #|                "data": "eyJmb28iOiAiYmFyIn0K",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a validly-encoded invalid JSON document; validates true",
  #|                "data": "ezp9Cg==",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an invalid base64 string that is valid JSON; validates true",
  #|                "data": "{}",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores non-strings",
  #|                "data": 100,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "validation of binary-encoded media type documents with schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contentMediaType": "application/json",
  #|            "contentEncoding": "base64",
  #|            "contentSchema": { "type": "object", "required": ["foo"], "properties": { "foo": { "type": "string" } } }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a valid base64-encoded JSON document",
  #|                "data": "eyJmb28iOiAiYmFyIn0K",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "another valid base64-encoded JSON document",
  #|                "data": "eyJib28iOiAyMCwgImZvbyI6ICJiYXoifQ==",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an invalid base64-encoded JSON document; validates true",
  #|                "data": "eyJib28iOiAyMH0=",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an empty object as a base64-encoded JSON document; validates true",
  #|                "data": "e30=",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an empty array as a base64-encoded JSON document",
  #|                "data": "W10=",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a validly-encoded invalid JSON document; validates true",
  #|                "data": "ezp9Cg==",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an invalid base64 string that is valid JSON; validates true",
  #|                "data": "{}",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores non-strings",
  #|                "data": 100,
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_default =
  #|[
  #|    {
  #|        "description": "invalid type for default",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {
  #|                    "type": "integer",
  #|                    "default": []
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid when property is specified",
  #|                "data": {"foo": 13},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "still valid when the invalid default is used",
  #|                "data": {},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "invalid string value for default",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "bar": {
  #|                    "type": "string",
  #|                    "minLength": 4,
  #|                    "default": "bad"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid when property is specified",
  #|                "data": {"bar": "good"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "still valid when the invalid default is used",
  #|                "data": {},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "the default keyword does not do anything if the property is missing",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "object",
  #|            "properties": {
  #|                "alpha": {
  #|                    "type": "number",
  #|                    "maximum": 3,
  #|                    "default": 5
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "an explicit property value is checked against maximum (passing)",
  #|                "data": { "alpha": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an explicit property value is checked against maximum (failing)",
  #|                "data": { "alpha": 5 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "missing properties are not filled in with the default",
  #|                "data": {},
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_defs =
  #|[
  #|    {
  #|        "description": "validate definition against metaschema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "https://json-schema.org/draft/2020-12/schema"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid definition schema",
  #|                "data": {"$defs": {"foo": {"type": "integer"}}},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid definition schema",
  #|                "data": {"$defs": {"foo": {"type": 1}}},
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_dependentRequired =
  #|[
  #|    {
  #|        "description": "single dependency",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "dependentRequired": {"bar": ["foo"]}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "neither",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "nondependant",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with dependency",
  #|                "data": {"foo": 1, "bar": 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "missing dependency",
  #|                "data": {"bar": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores arrays",
  #|                "data": ["bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores strings",
  #|                "data": "foobar",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores other non-objects",
  #|                "data": 12,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "empty dependents",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "dependentRequired": {"bar": []}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "empty object",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object with one property",
  #|                "data": {"bar": 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-object is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "multiple dependents required",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "dependentRequired": {"quux": ["foo", "bar"]}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "neither",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "nondependants",
  #|                "data": {"foo": 1, "bar": 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with dependencies",
  #|                "data": {"foo": 1, "bar": 2, "quux": 3},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "missing dependency",
  #|                "data": {"foo": 1, "quux": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "missing other dependency",
  #|                "data": {"bar": 1, "quux": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "missing both dependencies",
  #|                "data": {"quux": 1},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "dependencies with escaped characters",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "dependentRequired": {
  #|                "foo\nbar": ["foo\rbar"],
  #|                "foo\"bar": ["foo'bar"]
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "CRLF",
  #|                "data": {
  #|                    "foo\nbar": 1,
  #|                    "foo\rbar": 2
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "quoted quotes",
  #|                "data": {
  #|                    "foo'bar": 1,
  #|                    "foo\"bar": 2
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "CRLF missing dependent",
  #|                "data": {
  #|                    "foo\nbar": 1,
  #|                    "foo": 2
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "quoted quotes missing dependent",
  #|                "data": {
  #|                    "foo\"bar": 2
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_dependentSchemas =
  #|[
  #|    {
  #|        "description": "single dependency",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "dependentSchemas": {
  #|                "bar": {
  #|                    "properties": {
  #|                        "foo": {"type": "integer"},
  #|                        "bar": {"type": "integer"}
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid",
  #|                "data": {"foo": 1, "bar": 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "no dependency",
  #|                "data": {"foo": "quux"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "wrong type",
  #|                "data": {"foo": "quux", "bar": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "wrong type other",
  #|                "data": {"foo": 2, "bar": "quux"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "wrong type both",
  #|                "data": {"foo": "quux", "bar": "quux"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores arrays",
  #|                "data": ["bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores strings",
  #|                "data": "foobar",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores other non-objects",
  #|                "data": 12,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "boolean subschemas",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "dependentSchemas": {
  #|                "foo": true,
  #|                "bar": false
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "object with property having schema true is valid",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object with property having schema false is invalid",
  #|                "data": {"bar": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "object with both properties is invalid",
  #|                "data": {"foo": 1, "bar": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty object is valid",
  #|                "data": {},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "dependencies with escaped characters",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "dependentSchemas": {
  #|                "foo\tbar": {"minProperties": 4},
  #|                "foo'bar": {"required": ["foo\"bar"]}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "quoted tab",
  #|                "data": {
  #|                    "foo\tbar": 1,
  #|                    "a": 2,
  #|                    "b": 3,
  #|                    "c": 4
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "quoted quote",
  #|                "data": {
  #|                    "foo'bar": {"foo\"bar": 1}
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "quoted tab invalid under dependent schema",
  #|                "data": {
  #|                    "foo\tbar": 1,
  #|                    "a": 2
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "quoted quote invalid under dependent schema",
  #|                "data": {"foo'bar": 1},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "dependent subschema incompatible with root",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {}
  #|            },
  #|            "dependentSchemas": {
  #|                "foo": {
  #|                    "properties": {
  #|                        "bar": {}
  #|                    },
  #|                    "additionalProperties": false
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "matches root",
  #|                "data": {"foo": 1},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "matches dependency",
  #|                "data": {"bar": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "matches both",
  #|                "data": {"foo": 1, "bar": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "no dependency",
  #|                "data": {"baz": 1},
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_dynamicRef =
  #|[
  #|    {
  #|        "description": "A $dynamicRef to a $dynamicAnchor in the same schema resource behaves like a normal $ref to an $anchor",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/dynamicRef-dynamicAnchor-same-schema/root",
  #|            "type": "array",
  #|            "items": { "$dynamicRef": "#items" },
  #|            "$defs": {
  #|                "foo": {
  #|                    "$dynamicAnchor": "items",
  #|                    "type": "string"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "An array of strings is valid",
  #|                "data": ["foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "An array containing non-strings is invalid",
  #|                "data": ["foo", 42],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "A $dynamicRef to an $anchor in the same schema resource behaves like a normal $ref to an $anchor",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/dynamicRef-anchor-same-schema/root",
  #|            "type": "array",
  #|            "items": { "$dynamicRef": "#items" },
  #|            "$defs": {
  #|                "foo": {
  #|                    "$anchor": "items",
  #|                    "type": "string"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "An array of strings is valid",
  #|                "data": ["foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "An array containing non-strings is invalid",
  #|                "data": ["foo", 42],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "A $ref to a $dynamicAnchor in the same schema resource behaves like a normal $ref to an $anchor",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/ref-dynamicAnchor-same-schema/root",
  #|            "type": "array",
  #|            "items": { "$ref": "#items" },
  #|            "$defs": {
  #|                "foo": {
  #|                    "$dynamicAnchor": "items",
  #|                    "type": "string"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "An array of strings is valid",
  #|                "data": ["foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "An array containing non-strings is invalid",
  #|                "data": ["foo", 42],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "A $dynamicRef resolves to the first $dynamicAnchor still in scope that is encountered when the schema is evaluated",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/typical-dynamic-resolution/root",
  #|            "$ref": "list",
  #|            "$defs": {
  #|                "foo": {
  #|                    "$dynamicAnchor": "items",
  #|                    "type": "string"
  #|                },
  #|                "list": {
  #|                    "$id": "list",
  #|                    "type": "array",
  #|                    "items": { "$dynamicRef": "#items" },
  #|                    "$defs": {
  #|                      "items": {
  #|                          "$comment": "This is only needed to satisfy the bookending requirement",
  #|                          "$dynamicAnchor": "items"
  #|                      }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "An array of strings is valid",
  #|                "data": ["foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "An array containing non-strings is invalid",
  #|                "data": ["foo", 42],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "A $dynamicRef without anchor in fragment behaves identical to $ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/dynamicRef-without-anchor/root",
  #|            "$ref": "list",
  #|            "$defs": {
  #|                "foo": {
  #|                    "$dynamicAnchor": "items",
  #|                    "type": "string"
  #|                },
  #|                "list": {
  #|                    "$id": "list",
  #|                    "type": "array",
  #|                    "items": { "$dynamicRef": "#/$defs/items" },
  #|                    "$defs": {
  #|                      "items": {
  #|                          "$comment": "This is only needed to satisfy the bookending requirement",
  #|                          "$dynamicAnchor": "items",
  #|                          "type": "number"
  #|                      }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "An array of strings is invalid",
  #|                "data": ["foo", "bar"],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "An array of numbers is valid",
  #|                "data": [24, 42],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "A $dynamicRef with intermediate scopes that don't include a matching $dynamicAnchor does not affect dynamic scope resolution",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/dynamic-resolution-with-intermediate-scopes/root",
  #|            "$ref": "intermediate-scope",
  #|            "$defs": {
  #|                "foo": {
  #|                    "$dynamicAnchor": "items",
  #|                    "type": "string"
  #|                },
  #|                "intermediate-scope": {
  #|                    "$id": "intermediate-scope",
  #|                    "$ref": "list"
  #|                },
  #|                "list": {
  #|                    "$id": "list",
  #|                    "type": "array",
  #|                    "items": { "$dynamicRef": "#items" },
  #|                    "$defs": {
  #|                      "items": {
  #|                          "$comment": "This is only needed to satisfy the bookending requirement",
  #|                          "$dynamicAnchor": "items"
  #|                      }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "An array of strings is valid",
  #|                "data": ["foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "An array containing non-strings is invalid",
  #|                "data": ["foo", 42],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "An $anchor with the same name as a $dynamicAnchor is not used for dynamic scope resolution",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/dynamic-resolution-ignores-anchors/root",
  #|            "$ref": "list",
  #|            "$defs": {
  #|                "foo": {
  #|                    "$anchor": "items",
  #|                    "type": "string"
  #|                },
  #|                "list": {
  #|                    "$id": "list",
  #|                    "type": "array",
  #|                    "items": { "$dynamicRef": "#items" },
  #|                    "$defs": {
  #|                      "items": {
  #|                          "$comment": "This is only needed to satisfy the bookending requirement",
  #|                          "$dynamicAnchor": "items"
  #|                      }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "Any array is valid",
  #|                "data": ["foo", 42],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "A $dynamicRef without a matching $dynamicAnchor in the same schema resource behaves like a normal $ref to $anchor",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/dynamic-resolution-without-bookend/root",
  #|            "$ref": "list",
  #|            "$defs": {
  #|                "foo": {
  #|                    "$dynamicAnchor": "items",
  #|                    "type": "string"
  #|                },
  #|                "list": {
  #|                    "$id": "list",
  #|                    "type": "array",
  #|                    "items": { "$dynamicRef": "#items" },
  #|                    "$defs": {
  #|                        "items": {
  #|                            "$comment": "This is only needed to give the reference somewhere to resolve to when it behaves like $ref",
  #|                            "$anchor": "items"
  #|                        }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "Any array is valid",
  #|                "data": ["foo", 42],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "A $dynamicRef with a non-matching $dynamicAnchor in the same schema resource behaves like a normal $ref to $anchor",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/unmatched-dynamic-anchor/root",
  #|            "$ref": "list",
  #|            "$defs": {
  #|                "foo": {
  #|                    "$dynamicAnchor": "items",
  #|                    "type": "string"
  #|                },
  #|                "list": {
  #|                    "$id": "list",
  #|                    "type": "array",
  #|                    "items": { "$dynamicRef": "#items" },
  #|                    "$defs": {
  #|                        "items": {
  #|                            "$comment": "This is only needed to give the reference somewhere to resolve to when it behaves like $ref",
  #|                            "$anchor": "items",
  #|                            "$dynamicAnchor": "foo"
  #|                        }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "Any array is valid",
  #|                "data": ["foo", 42],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "A $dynamicRef that initially resolves to a schema with a matching $dynamicAnchor resolves to the first $dynamicAnchor in the dynamic scope",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/relative-dynamic-reference/root",
  #|            "$dynamicAnchor": "meta",
  #|            "type": "object",
  #|            "properties": {
  #|                "foo": { "const": "pass" }
  #|            },
  #|            "$ref": "extended",
  #|            "$defs": {
  #|                "extended": {
  #|                    "$id": "extended",
  #|                    "$dynamicAnchor": "meta",
  #|                    "type": "object",
  #|                    "properties": {
  #|                        "bar": { "$ref": "bar" }
  #|                    }
  #|                },
  #|                "bar": {
  #|                    "$id": "bar",
  #|                    "type": "object",
  #|                    "properties": {
  #|                        "baz": { "$dynamicRef": "extended#meta" }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "The recursive part is valid against the root",
  #|                "data": {
  #|                    "foo": "pass",
  #|                    "bar": {
  #|                        "baz": { "foo": "pass" }
  #|                    }
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "The recursive part is not valid against the root",
  #|                "data": {
  #|                    "foo": "pass",
  #|                    "bar": {
  #|                        "baz": { "foo": "fail" }
  #|                    }
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "A $dynamicRef that initially resolves to a schema without a matching $dynamicAnchor behaves like a normal $ref to $anchor",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/relative-dynamic-reference-without-bookend/root",
  #|            "$dynamicAnchor": "meta",
  #|            "type": "object",
  #|            "properties": {
  #|                "foo": { "const": "pass" }
  #|            },
  #|            "$ref": "extended",
  #|            "$defs": {
  #|                "extended": {
  #|                    "$id": "extended",
  #|                    "$anchor": "meta",
  #|                    "type": "object",
  #|                    "properties": {
  #|                        "bar": { "$ref": "bar" }
  #|                    }
  #|                },
  #|                "bar": {
  #|                    "$id": "bar",
  #|                    "type": "object",
  #|                    "properties": {
  #|                        "baz": { "$dynamicRef": "extended#meta" }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "The recursive part doesn't need to validate against the root",
  #|                "data": {
  #|                    "foo": "pass",
  #|                    "bar": {
  #|                        "baz": { "foo": "fail" }
  #|                    }
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "multiple dynamic paths to the $dynamicRef keyword",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/dynamic-ref-with-multiple-paths/main",
  #|            "if": {
  #|                "properties": {
  #|                    "kindOfList": { "const": "numbers" }
  #|                },
  #|                "required": ["kindOfList"]
  #|            },
  #|            "then": { "$ref": "numberList" },
  #|            "else": { "$ref": "stringList" },
  #|
  #|            "$defs": {
  #|                "genericList": {
  #|                    "$id": "genericList",
  #|                    "properties": {
  #|                        "list": {
  #|                            "items": { "$dynamicRef": "#itemType" }
  #|                        }
  #|                    },
  #|                    "$defs": {
  #|                        "defaultItemType": {
  #|                            "$comment": "Only needed to satisfy bookending requirement",
  #|                            "$dynamicAnchor": "itemType"
  #|                        }
  #|                    }
  #|                },
  #|                "numberList": {
  #|                    "$id": "numberList",
  #|                    "$defs": {
  #|                        "itemType": {
  #|                            "$dynamicAnchor": "itemType",
  #|                            "type": "number"
  #|                        }
  #|                    },
  #|                    "$ref": "genericList"
  #|                },
  #|                "stringList": {
  #|                    "$id": "stringList",
  #|                    "$defs": {
  #|                        "itemType": {
  #|                            "$dynamicAnchor": "itemType",
  #|                            "type": "string"
  #|                        }
  #|                    },
  #|                    "$ref": "genericList"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number list with number values",
  #|                "data": {
  #|                    "kindOfList": "numbers",
  #|                    "list": [1.1]
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "number list with string values",
  #|                "data": {
  #|                    "kindOfList": "numbers",
  #|                    "list": ["foo"]
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "string list with number values",
  #|                "data": {
  #|                    "kindOfList": "strings",
  #|                    "list": [1.1]
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "string list with string values",
  #|                "data": {
  #|                    "kindOfList": "strings",
  #|                    "list": ["foo"]
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "after leaving a dynamic scope, it is not used by a $dynamicRef",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/dynamic-ref-leaving-dynamic-scope/main",
  #|            "if": {
  #|                "$id": "first_scope",
  #|                "$defs": {
  #|                    "thingy": {
  #|                        "$comment": "this is first_scope#thingy",
  #|                        "$dynamicAnchor": "thingy",
  #|                        "type": "number"
  #|                    }
  #|                }
  #|            },
  #|            "then": {
  #|                "$id": "second_scope",
  #|                "$ref": "start",
  #|                "$defs": {
  #|                    "thingy": {
  #|                        "$comment": "this is second_scope#thingy, the final destination of the $dynamicRef",
  #|                        "$dynamicAnchor": "thingy",
  #|                        "type": "null"
  #|                    }
  #|                }
  #|            },
  #|            "$defs": {
  #|                "start": {
  #|                    "$comment": "this is the landing spot from $ref",
  #|                    "$id": "start",
  #|                    "$dynamicRef": "inner_scope#thingy"
  #|                },
  #|                "thingy": {
  #|                    "$comment": "this is the first stop for the $dynamicRef",
  #|                    "$id": "inner_scope",
  #|                    "$dynamicAnchor": "thingy",
  #|                    "type": "string"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "string matches /$defs/thingy, but the $dynamicRef does not stop here",
  #|                "data": "a string",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "first_scope is not in dynamic scope for the $dynamicRef",
  #|                "data": 42,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "/then/$defs/thingy is the final stop for the $dynamicRef",
  #|                "data": null,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "strict-tree schema, guards against misspelled properties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://localhost:1234/draft2020-12/strict-tree.json",
  #|            "$dynamicAnchor": "node",
  #|
  #|            "$ref": "tree.json",
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "instance with misspelled field",
  #|                "data": {
  #|                    "children": [{
  #|                            "daat": 1
  #|                        }]
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "instance with correct field",
  #|                "data": {
  #|                    "children": [{
  #|                            "data": 1
  #|                        }]
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "tests for implementation dynamic anchor and reference link",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://localhost:1234/draft2020-12/strict-extendible.json",
  #|            "$ref": "extendible-dynamic-ref.json",
  #|            "$defs": {
  #|                "elements": {
  #|                    "$dynamicAnchor": "elements",
  #|                    "properties": {
  #|                        "a": true
  #|                    },
  #|                    "required": ["a"],
  #|                    "additionalProperties": false
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "incorrect parent schema",
  #|                "data": {
  #|                    "a": true
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "incorrect extended schema",
  #|                "data": {
  #|                    "elements": [
  #|                        { "b": 1 }
  #|                    ]
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "correct extended schema",
  #|                "data": {
  #|                    "elements": [
  #|                        { "a": 1 }
  #|                    ]
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "$ref and $dynamicAnchor are independent of order - $defs first",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://localhost:1234/draft2020-12/strict-extendible-allof-defs-first.json",
  #|            "allOf": [
  #|                {
  #|                    "$ref": "extendible-dynamic-ref.json"
  #|                },
  #|                {
  #|                    "$defs": {
  #|                        "elements": {
  #|                            "$dynamicAnchor": "elements",
  #|                            "properties": {
  #|                                "a": true
  #|                            },
  #|                            "required": ["a"],
  #|                            "additionalProperties": false
  #|                        }
  #|                    }
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "incorrect parent schema",
  #|                "data": {
  #|                    "a": true
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "incorrect extended schema",
  #|                "data": {
  #|                    "elements": [
  #|                        { "b": 1 }
  #|                    ]
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "correct extended schema",
  #|                "data": {
  #|                    "elements": [
  #|                        { "a": 1 }
  #|                    ]
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "$ref and $dynamicAnchor are independent of order - $ref first",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://localhost:1234/draft2020-12/strict-extendible-allof-ref-first.json",
  #|            "allOf": [
  #|                {
  #|                    "$defs": {
  #|                        "elements": {
  #|                            "$dynamicAnchor": "elements",
  #|                            "properties": {
  #|                                "a": true
  #|                            },
  #|                            "required": ["a"],
  #|                            "additionalProperties": false
  #|                        }
  #|                    }
  #|                },
  #|                {
  #|                    "$ref": "extendible-dynamic-ref.json"
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "incorrect parent schema",
  #|                "data": {
  #|                    "a": true
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "incorrect extended schema",
  #|                "data": {
  #|                    "elements": [
  #|                        { "b": 1 }
  #|                    ]
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "correct extended schema",
  #|                "data": {
  #|                    "elements": [
  #|                        { "a": 1 }
  #|                    ]
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "$ref to $dynamicRef finds detached $dynamicAnchor",
  #|        "schema": {
  #|            "$ref": "http://localhost:1234/draft2020-12/detached-dynamicref.json#/$defs/foo"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-number is invalid",
  #|                "data": "a",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "$dynamicRef points to a boolean schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$defs": {
  #|                "true": true,
  #|                "false": false
  #|            },
  #|            "properties": {
  #|                "true": {
  #|                    "$dynamicRef": "#/$defs/true"
  #|                },
  #|                "false": {
  #|                    "$dynamicRef": "#/$defs/false"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "follow $dynamicRef to a true schema",
  #|                "data": { "true": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "follow $dynamicRef to a false schema",
  #|                "data": { "false": 1 },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "$dynamicRef skips over intermediate resources - direct reference",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/dynamic-ref-skips-intermediate-resource/main",
  #|            "type": "object",
  #|            "properties": {
  #|                "bar-item": {
  #|                    "$ref": "item"
  #|                }
  #|            },
  #|            "$defs": {
  #|                "bar": {
  #|                    "$id": "bar",
  #|                    "type": "array",
  #|                    "items": {
  #|                        "$ref": "item"
  #|                    },
  #|                    "$defs": {
  #|                        "item": {
  #|                            "$id": "item",
  #|                            "type": "object",
  #|                            "properties": {
  #|                                "content": {
  #|                                    "$dynamicRef": "#content"
  #|                                }
  #|                            },
  #|                            "$defs": {
  #|                                "defaultContent": {
  #|                                    "$dynamicAnchor": "content",
  #|                                    "type": "integer"
  #|                                }
  #|                            }
  #|                        },
  #|                        "content": {
  #|                            "$dynamicAnchor": "content",
  #|                            "type": "string"
  #|                        }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "integer property passes",
  #|                "data": { "bar-item": { "content": 42 } },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "string property fails",
  #|                "data": { "bar-item": { "content": "value" } },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "$dynamicRef avoids the root of each schema, but scopes are still registered",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://test.json-schema.org/dynamic-ref-avoids-root-of-each-schema/base",
  #|            "$ref": "first#/$defs/stuff",
  #|            "$defs": {
  #|                "first": {
  #|                    "$id": "first",
  #|                    "$defs": {
  #|                        "stuff": {
  #|                            "$ref": "second#/$defs/stuff"
  #|                        },
  #|                        "length": {
  #|                            "$comment": "unused, because there is no $dynamicAnchor here",
  #|                            "maxLength": 1
  #|                        }
  #|                    }
  #|                },
  #|                "second": {
  #|                    "$id": "second",
  #|                    "$defs": {
  #|                        "stuff": {
  #|                            "$ref": "third#/$defs/stuff"
  #|                        },
  #|                        "length": {
  #|                            "$dynamicAnchor": "length",
  #|                            "maxLength": 2
  #|                        }
  #|                    }
  #|                },
  #|                "third": {
  #|                    "$id": "third",
  #|                    "$defs": {
  #|                        "stuff": {
  #|                            "$dynamicRef": "#length"
  #|                        },
  #|                        "length": {
  #|                            "$dynamicAnchor": "length",
  #|                            "maxLength": 3
  #|                        }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "data is sufficient for schema at second#/$defs/length",
  #|                "data": "hi",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "data is not sufficient for schema at second#/$defs/length",
  #|                "data": "hey",
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_enum =
  #|[
  #|    {
  #|        "description": "simple enum validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": [1, 2, 3]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "one of the enum is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "something else is invalid",
  #|                "data": 4,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "heterogeneous enum validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": [6, "foo", [], true, {"foo": 12}]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "one of the enum is valid",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "something else is invalid",
  #|                "data": null,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "objects are deep compared",
  #|                "data": {"foo": false},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "valid object matches",
  #|                "data": {"foo": 12},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "extra properties in object is invalid",
  #|                "data": {"foo": 12, "boo": 42},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "heterogeneous enum-with-null validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": [6, null]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "null is valid",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "number is valid",
  #|                "data": 6,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "something else is invalid",
  #|                "data": "test",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "enums in properties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type":"object",
  #|            "properties": {
  #|                "foo": {"enum":["foo"]},
  #|                "bar": {"enum":["bar"]}
  #|            },
  #|            "required": ["bar"]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "both properties are valid",
  #|                "data": {"foo":"foo", "bar":"bar"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "wrong foo value",
  #|                "data": {"foo":"foot", "bar":"bar"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "wrong bar value",
  #|                "data": {"foo":"foo", "bar":"bart"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "missing optional property is valid",
  #|                "data": {"bar":"bar"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "missing required property is invalid",
  #|                "data": {"foo":"foo"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "missing all properties is invalid",
  #|                "data": {},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "enum with escaped characters",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": ["foo\nbar", "foo\rbar"]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "member 1 is valid",
  #|                "data": "foo\nbar",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "member 2 is valid",
  #|                "data": "foo\rbar",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "another string is invalid",
  #|                "data": "abc",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "enum with false does not match 0",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": [false]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "false is valid",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "integer zero is invalid",
  #|                "data": 0,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "float zero is invalid",
  #|                "data": 0.0,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "enum with [false] does not match [0]",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": [[false]]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "[false] is valid",
  #|                "data": [false],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[0] is invalid",
  #|                "data": [0],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "[0.0] is invalid",
  #|                "data": [0.0],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "enum with true does not match 1",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": [true]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "true is valid",
  #|                "data": true,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "integer one is invalid",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "float one is invalid",
  #|                "data": 1.0,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "enum with [true] does not match [1]",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": [[true]]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "[true] is valid",
  #|                "data": [true],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[1] is invalid",
  #|                "data": [1],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "[1.0] is invalid",
  #|                "data": [1.0],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "enum with 0 does not match false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": [0]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "false is invalid",
  #|                "data": false,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "integer zero is valid",
  #|                "data": 0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "float zero is valid",
  #|                "data": 0.0,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "enum with [0] does not match [false]",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": [[0]]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "[false] is invalid",
  #|                "data": [false],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "[0] is valid",
  #|                "data": [0],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[0.0] is valid",
  #|                "data": [0.0],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "enum with 1 does not match true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": [1]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "true is invalid",
  #|                "data": true,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "integer one is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "float one is valid",
  #|                "data": 1.0,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "enum with [1] does not match [true]",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": [[1]]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "[true] is invalid",
  #|                "data": [true],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "[1] is valid",
  #|                "data": [1],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[1.0] is valid",
  #|                "data": [1.0],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "nul characters in strings",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": [ "hello\u0000there" ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "match string with nul",
  #|                "data": "hello\u0000there",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "do not match string lacking nul",
  #|                "data": "hellothere",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "empty enum",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": []
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "string is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "number is invalid",
  #|                "data": 42,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "null is invalid",
  #|                "data": null,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "object is invalid",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "array is invalid",
  #|                "data": [],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "boolean is invalid",
  #|                "data": false,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "characters with the same visual representation, but different number of codepoints",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "enum": ["ä"],
  #|            "$comment": "U+00E4"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "character uses the same codepoint",
  #|                "data": "ä",
  #|                "comment": "U+00E4",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "character looks the same but uses combining marks",
  #|                "data": "ä",
  #|                "comment": "a, U+0308",
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_exclusiveMaximum =
  #|[
  #|    {
  #|        "description": "exclusiveMaximum validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "exclusiveMaximum": 3.0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "below the exclusiveMaximum is valid",
  #|                "data": 2.2,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "boundary point is invalid",
  #|                "data": 3.0,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "above the exclusiveMaximum is invalid",
  #|                "data": 3.5,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores non-numbers",
  #|                "data": "x",
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_exclusiveMinimum =
  #|[
  #|    {
  #|        "description": "exclusiveMinimum validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "exclusiveMinimum": 1.1
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "above the exclusiveMinimum is valid",
  #|                "data": 1.2,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "boundary point is invalid",
  #|                "data": 1.1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "below the exclusiveMinimum is invalid",
  #|                "data": 0.6,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores non-numbers",
  #|                "data": "x",
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_format =
  #|[
  #|    {
  #|        "description": "email format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "email"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid email string is only an annotation by default",
  #|                "data": "2962",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "idn-email format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "idn-email"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid idn-email string is only an annotation by default",
  #|                "data": "2962",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "regex format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "regex"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid regex string is only an annotation by default",
  #|                "data": "^(abc]",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "ipv4 format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "ipv4"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid ipv4 string is only an annotation by default",
  #|                "data": "127.0.0.0.1",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "ipv6 format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "ipv6"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid ipv6 string is only an annotation by default",
  #|                "data": "12345::",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "idn-hostname format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "idn-hostname"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid idn-hostname string is only an annotation by default",
  #|                "data": "〮실례.테스트",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "hostname format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "hostname"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid hostname string is only an annotation by default",
  #|                "data": "-a-host-name-that-starts-with--",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "date format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "date"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid date string is only an annotation by default",
  #|                "data": "06/19/1963",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "date-time format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "date-time"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid date-time string is only an annotation by default",
  #|                "data": "1990-02-31T15:59:60.123-08:00",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "time format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "time"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid time string is only an annotation by default",
  #|                "data": "08:30:06 PST",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "json-pointer format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "json-pointer"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid json-pointer string is only an annotation by default",
  #|                "data": "/foo/bar~",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "relative-json-pointer format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "relative-json-pointer"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid relative-json-pointer string is only an annotation by default",
  #|                "data": "/foo/bar",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "iri format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "iri"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid iri string is only an annotation by default",
  #|                "data": "http://2001:0db8:85a3:0000:0000:8a2e:0370:7334",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "iri-reference format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "iri-reference"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid iri-reference string is only an annotation by default",
  #|                "data": "\\\\WINDOWS\\filëßåré",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "uri format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "uri"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid uri string is only an annotation by default",
  #|                "data": "//foo.bar/?baz=qux#quux",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "uri-reference format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "uri-reference"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid uri-reference string is only an annotation by default",
  #|                "data": "\\\\WINDOWS\\fileshare",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "uri-template format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "uri-template"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid uri-template string is only an annotation by default",
  #|                "data": "http://example.com/dictionary/{term:1}/{term",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "uuid format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "uuid"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid uuid string is only an annotation by default",
  #|                "data": "2eb8aa08-aa98-11ea-b4aa-73b441d1638",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "duration format",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "format": "duration"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all string formats ignore integers",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore floats",
  #|                "data": 13.7,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore booleans",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all string formats ignore nulls",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid duration string is only an annotation by default",
  #|                "data": "PT1D",
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_if_then_else =
  #|[
  #|    {
  #|        "description": "ignore if without then or else",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "if": {
  #|                "const": 0
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid when valid against lone if",
  #|                "data": 0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "valid when invalid against lone if",
  #|                "data": "hello",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "ignore then without if",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "then": {
  #|                "const": 0
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid when valid against lone then",
  #|                "data": 0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "valid when invalid against lone then",
  #|                "data": "hello",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "ignore else without if",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "else": {
  #|                "const": 0
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid when valid against lone else",
  #|                "data": 0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "valid when invalid against lone else",
  #|                "data": "hello",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "if and then without else",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "if": {
  #|                "exclusiveMaximum": 0
  #|            },
  #|            "then": {
  #|                "minimum": -10
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid through then",
  #|                "data": -1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid through then",
  #|                "data": -100,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "valid when if test fails",
  #|                "data": 3,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "if and else without then",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "if": {
  #|                "exclusiveMaximum": 0
  #|            },
  #|            "else": {
  #|                "multipleOf": 2
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid when if test passes",
  #|                "data": -1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "valid through else",
  #|                "data": 4,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid through else",
  #|                "data": 3,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "validate against correct branch, then vs else",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "if": {
  #|                "exclusiveMaximum": 0
  #|            },
  #|            "then": {
  #|                "minimum": -10
  #|            },
  #|            "else": {
  #|                "multipleOf": 2
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid through then",
  #|                "data": -1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid through then",
  #|                "data": -100,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "valid through else",
  #|                "data": 4,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid through else",
  #|                "data": 3,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "non-interference across combined schemas",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "if": {
  #|                        "exclusiveMaximum": 0
  #|                    }
  #|                },
  #|                {
  #|                    "then": {
  #|                        "minimum": -10
  #|                    }
  #|                },
  #|                {
  #|                    "else": {
  #|                        "multipleOf": 2
  #|                    }
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid, but would have been invalid through then",
  #|                "data": -100,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "valid, but would have been invalid through else",
  #|                "data": 3,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "if with boolean schema true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "if": true,
  #|            "then": { "const": "then" },
  #|            "else": { "const": "else" }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "boolean schema true in if always chooses the then path (valid)",
  #|                "data": "then",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "boolean schema true in if always chooses the then path (invalid)",
  #|                "data": "else",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "if with boolean schema false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "if": false,
  #|            "then": { "const": "then" },
  #|            "else": { "const": "else" }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "boolean schema false in if always chooses the else path (invalid)",
  #|                "data": "then",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "boolean schema false in if always chooses the else path (valid)",
  #|                "data": "else",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "if appears at the end when serialized (keyword processing sequence)",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "then": { "const": "yes" },
  #|            "else": { "const": "other" },
  #|            "if": { "maxLength": 4 }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "yes redirects to then and passes",
  #|                "data": "yes",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "other redirects to else and passes",
  #|                "data": "other",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "no redirects to then and fails",
  #|                "data": "no",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "invalid redirects to else and fails",
  #|                "data": "invalid",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "then: false fails when condition matches",
  #|        "schema": {
  #|            "if": { "const": 1 },
  #|            "then": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "matches if → then=false → invalid",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "does not match if → then ignored → valid",
  #|                "data": 2,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "else: false fails when condition does not match",
  #|        "schema": {
  #|            "if": { "const": 1 },
  #|            "else": false
  #|        },
  #|        "tests": [
  #|            {
  #|               "description": "matches if → else ignored → valid",
  #|               "data": 1,
  #|               "valid": true
  #|            },
  #|            {
  #|                "description": "does not match if → else executes → invalid",
  #|                "data": 2,
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_infinite_loop_detection =
  #|[
  #|    {
  #|        "description": "evaluating the same schema location against the same data location twice is not a sign of an infinite loop",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$defs": {
  #|                "int": { "type": "integer" }
  #|            },
  #|            "allOf": [
  #|                {
  #|                    "properties": {
  #|                        "foo": {
  #|                            "$ref": "#/$defs/int"
  #|                        }
  #|                    }
  #|                },
  #|                {
  #|                    "additionalProperties": {
  #|                        "$ref": "#/$defs/int"
  #|                    }
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "passing case",
  #|                "data": { "foo": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "failing case",
  #|                "data": { "foo": "a string" },
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_items =
  #|[
  #|    {
  #|        "description": "a schema given for items",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "items": {"type": "integer"}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid items",
  #|                "data": [ 1, 2, 3 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "wrong type of items",
  #|                "data": [1, "x"],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores non-arrays",
  #|                "data": {"foo" : "bar"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "JavaScript pseudo-array is valid",
  #|                "data": {
  #|                    "0": "invalid",
  #|                    "length": 1
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "items with boolean schema (true)",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "items": true
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any array is valid",
  #|                "data": [ 1, "foo", true ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "empty array is valid",
  #|                "data": [],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "items with boolean schema (false)",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "items": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any non-empty array is invalid",
  #|                "data": [ 1, "foo", true ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty array is valid",
  #|                "data": [],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "items and subitems",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$defs": {
  #|                "item": {
  #|                    "type": "array",
  #|                    "items": false,
  #|                    "prefixItems": [
  #|                        { "$ref": "#/$defs/sub-item" },
  #|                        { "$ref": "#/$defs/sub-item" }
  #|                    ]
  #|                },
  #|                "sub-item": {
  #|                    "type": "object",
  #|                    "required": ["foo"]
  #|                }
  #|            },
  #|            "type": "array",
  #|            "items": false,
  #|            "prefixItems": [
  #|                { "$ref": "#/$defs/item" },
  #|                { "$ref": "#/$defs/item" },
  #|                { "$ref": "#/$defs/item" }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid items",
  #|                "data": [
  #|                    [ {"foo": null}, {"foo": null} ],
  #|                    [ {"foo": null}, {"foo": null} ],
  #|                    [ {"foo": null}, {"foo": null} ]
  #|                ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too many items",
  #|                "data": [
  #|                    [ {"foo": null}, {"foo": null} ],
  #|                    [ {"foo": null}, {"foo": null} ],
  #|                    [ {"foo": null}, {"foo": null} ],
  #|                    [ {"foo": null}, {"foo": null} ]
  #|                ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "too many sub-items",
  #|                "data": [
  #|                    [ {"foo": null}, {"foo": null}, {"foo": null} ],
  #|                    [ {"foo": null}, {"foo": null} ],
  #|                    [ {"foo": null}, {"foo": null} ]
  #|                ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "wrong item",
  #|                "data": [
  #|                    {"foo": null},
  #|                    [ {"foo": null}, {"foo": null} ],
  #|                    [ {"foo": null}, {"foo": null} ]
  #|                ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "wrong sub-item",
  #|                "data": [
  #|                    [ {}, {"foo": null} ],
  #|                    [ {"foo": null}, {"foo": null} ],
  #|                    [ {"foo": null}, {"foo": null} ]
  #|                ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "fewer items is valid",
  #|                "data": [
  #|                    [ {"foo": null} ],
  #|                    [ {"foo": null} ]
  #|                ],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "nested items",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "array",
  #|            "items": {
  #|                "type": "array",
  #|                "items": {
  #|                    "type": "array",
  #|                    "items": {
  #|                        "type": "array",
  #|                        "items": {
  #|                            "type": "number"
  #|                        }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid nested array",
  #|                "data": [[[[1]], [[2],[3]]], [[[4], [5], [6]]]],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "nested array with invalid type",
  #|                "data": [[[["1"]], [[2],[3]]], [[[4], [5], [6]]]],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "not deep enough",
  #|                "data": [[[1], [2],[3]], [[4], [5], [6]]],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "prefixItems with no additional items allowed",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [{}, {}, {}],
  #|            "items": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "empty array",
  #|                "data": [ ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "fewer number of items present (1)",
  #|                "data": [ 1 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "fewer number of items present (2)",
  #|                "data": [ 1, 2 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "equal number of items present",
  #|                "data": [ 1, 2, 3 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "additional items are not permitted",
  #|                "data": [ 1, 2, 3, 4 ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "items does not look in applicators, valid case",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                { "prefixItems": [ { "minimum": 3 } ] }
  #|            ],
  #|            "items": { "minimum": 5 }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "prefixItems in allOf does not constrain items, invalid case",
  #|                "data": [ 3, 5 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "prefixItems in allOf does not constrain items, valid case",
  #|                "data": [ 5, 5 ],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "prefixItems validation adjusts the starting index for items",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [ { "type": "string" } ],
  #|            "items": { "type": "integer" }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid items",
  #|                "data": [ "x", 2, 3 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "wrong type of second item",
  #|                "data": [ "x", "y" ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "items with heterogeneous array",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [{}],
  #|            "items": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "heterogeneous invalid instance",
  #|                "data": [ "foo", "bar", 37 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "valid instance",
  #|                "data": [ null ],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "items with null instance elements",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "items": {
  #|                "type": "null"
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "allows null elements",
  #|                "data": [ null ],
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_maxContains =
  #|[
  #|    {
  #|        "description": "maxContains without contains is ignored",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "maxContains": 1
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "one item valid against lone maxContains",
  #|                "data": [ 1 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "two items still valid against lone maxContains",
  #|                "data": [ 1, 2 ],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "maxContains with contains",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {"const": 1},
  #|            "maxContains": 1
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "empty data",
  #|                "data": [ ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "all elements match, valid maxContains",
  #|                "data": [ 1 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all elements match, invalid maxContains",
  #|                "data": [ 1, 1 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "some elements match, valid maxContains",
  #|                "data": [ 1, 2 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "some elements match, invalid maxContains",
  #|                "data": [ 1, 2, 1 ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "maxContains with contains, value with a decimal",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {"const": 1},
  #|            "maxContains": 1.0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "one element matches, valid maxContains",
  #|                "data": [ 1 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too many elements match, invalid maxContains",
  #|                "data": [ 1, 1 ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "minContains < maxContains",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {"const": 1},
  #|            "minContains": 1,
  #|            "maxContains": 3
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "actual < minContains < maxContains",
  #|                "data": [ ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "minContains < actual < maxContains",
  #|                "data": [ 1, 1 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "minContains < maxContains < actual",
  #|                "data": [ 1, 1, 1, 1 ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "maxContains = 0 with minContains = 0",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {"const": 1},
  #|            "minContains": 0,
  #|            "maxContains": 0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "empty array",
  #|                "data": [ ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "one matching item",
  #|                "data": [ 1 ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_maxItems =
  #|[
  #|    {
  #|        "description": "maxItems validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "maxItems": 2
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "shorter is valid",
  #|                "data": [1],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "exact length is valid",
  #|                "data": [1, 2],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too long is invalid",
  #|                "data": [1, 2, 3],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores non-arrays",
  #|                "data": "foobar",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "maxItems validation with a decimal",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "maxItems": 2.0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "shorter is valid",
  #|                "data": [1],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too long is invalid",
  #|                "data": [1, 2, 3],
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_maxLength =
  #|[
  #|    {
  #|        "description": "maxLength validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "maxLength": 2
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "shorter is valid",
  #|                "data": "f",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "exact length is valid",
  #|                "data": "fo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too long is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores non-strings",
  #|                "data": 100,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "two graphemes is long enough",
  #|                "data": "\uD83D\uDCA9\uD83D\uDCA9",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "maxLength validation with a decimal",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "maxLength": 2.0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "shorter is valid",
  #|                "data": "f",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too long is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_maxProperties =
  #|[
  #|    {
  #|        "description": "maxProperties validation",
  #|        "specification": [
  #|            {
  #|                "validation": "6.5.1"
  #|            }
  #|        ],
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "maxProperties": 2
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "shorter is valid",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "exact length is valid",
  #|                "data": {"foo": 1, "bar": 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too long is invalid",
  #|                "data": {"foo": 1, "bar": 2, "baz": 3},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores arrays",
  #|                "data": [1, 2, 3],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores strings",
  #|                "data": "foobar",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores other non-objects",
  #|                "data": 12,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "maxProperties validation with a decimal",
  #|        "specification": [
  #|            {
  #|                "validation": "6.5.1"
  #|            }
  #|        ],
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "maxProperties": 2.0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "shorter is valid",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too long is invalid",
  #|                "data": {"foo": 1, "bar": 2, "baz": 3},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "maxProperties = 0 means the object is empty",
  #|        "specification": [
  #|            {
  #|                "validation": "6.5.1"
  #|            }
  #|        ],
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "maxProperties": 0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "no properties is valid",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "one property is invalid",
  #|                "data": { "foo": 1 },
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_maximum =
  #|[
  #|    {
  #|        "description": "maximum validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "maximum": 3.0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "below the maximum is valid",
  #|                "data": 2.6,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "boundary point is valid",
  #|                "data": 3.0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "above the maximum is invalid",
  #|                "data": 3.5,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores non-numbers",
  #|                "data": "x",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "maximum validation with unsigned integer",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "maximum": 300
  #|        },
  #|        "tests":  [
  #|            {
  #|                "description": "below the maximum is valid",
  #|                "data": 299.97,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "boundary point integer is valid",
  #|                "data": 300,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "boundary point float is valid",
  #|                "data": 300.00,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "above the maximum is invalid",
  #|                "data": 300.5,
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_minContains =
  #|[
  #|    {
  #|        "description": "minContains without contains is ignored",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "minContains": 1
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "one item valid against lone minContains",
  #|                "data": [ 1 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "zero items still valid against lone minContains",
  #|                "data": [],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "minContains=1 with contains",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {"const": 1},
  #|            "minContains": 1
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "empty data",
  #|                "data": [ ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "no elements match",
  #|                "data": [ 2 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "single element matches, valid minContains",
  #|                "data": [ 1 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "some elements match, valid minContains",
  #|                "data": [ 1, 2 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all elements match, valid minContains",
  #|                "data": [ 1, 1 ],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "minContains=2 with contains",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {"const": 1},
  #|            "minContains": 2
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "empty data",
  #|                "data": [ ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "all elements match, invalid minContains",
  #|                "data": [ 1 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "some elements match, invalid minContains",
  #|                "data": [ 1, 2 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "all elements match, valid minContains (exactly as needed)",
  #|                "data": [ 1, 1 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all elements match, valid minContains (more than needed)",
  #|                "data": [ 1, 1, 1 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "some elements match, valid minContains",
  #|                "data": [ 1, 2, 1 ],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "minContains=2 with contains with a decimal value",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {"const": 1},
  #|            "minContains": 2.0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "one element matches, invalid minContains",
  #|                "data": [ 1 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "both elements match, valid minContains",
  #|                "data": [ 1, 1 ],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "maxContains = minContains",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {"const": 1},
  #|            "maxContains": 2,
  #|            "minContains": 2
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "empty data",
  #|                "data": [ ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "all elements match, invalid minContains",
  #|                "data": [ 1 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "all elements match, invalid maxContains",
  #|                "data": [ 1, 1, 1 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "all elements match, valid maxContains and minContains",
  #|                "data": [ 1, 1 ],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "maxContains < minContains",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {"const": 1},
  #|            "maxContains": 1,
  #|            "minContains": 3
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "empty data",
  #|                "data": [ ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "invalid minContains",
  #|                "data": [ 1 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "invalid maxContains",
  #|                "data": [ 1, 1, 1 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "invalid maxContains and minContains",
  #|                "data": [ 1, 1 ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "minContains = 0",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {"const": 1},
  #|            "minContains": 0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "empty data",
  #|                "data": [ ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "minContains = 0 makes contains always pass",
  #|                "data": [ 2 ],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "minContains = 0 with maxContains",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {"const": 1},
  #|            "minContains": 0,
  #|            "maxContains": 1
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "empty data",
  #|                "data": [ ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "not more than maxContains",
  #|                "data": [ 1 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too many",
  #|                "data": [ 1, 1 ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_minItems =
  #|[
  #|    {
  #|        "description": "minItems validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "minItems": 1
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "longer is valid",
  #|                "data": [1, 2],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "exact length is valid",
  #|                "data": [1],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too short is invalid",
  #|                "data": [],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores non-arrays",
  #|                "data": "",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "minItems validation with a decimal",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "minItems": 1.0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "longer is valid",
  #|                "data": [1, 2],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too short is invalid",
  #|                "data": [],
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_minLength =
  #|[
  #|    {
  #|        "description": "minLength validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "minLength": 2
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "longer is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "exact length is valid",
  #|                "data": "fo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too short is invalid",
  #|                "data": "f",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores non-strings",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "one grapheme is not long enough",
  #|                "data": "\uD83D\uDCA9",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "minLength validation with a decimal",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "minLength": 2.0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "longer is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too short is invalid",
  #|                "data": "f",
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_minProperties =
  #|[
  #|    {
  #|        "description": "minProperties validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "minProperties": 1
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "longer is valid",
  #|                "data": {"foo": 1, "bar": 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "exact length is valid",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too short is invalid",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores strings",
  #|                "data": "",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores other non-objects",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores null",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores booleans",
  #|                "data": true,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "minProperties validation with a decimal",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "minProperties": 1.0
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "longer is valid",
  #|                "data": {"foo": 1, "bar": 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "too short is invalid",
  #|                "data": {},
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_minimum =
  #|[
  #|    {
  #|        "description": "minimum validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "minimum": 1.1
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "above the minimum is valid",
  #|                "data": 2.6,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "boundary point is valid",
  #|                "data": 1.1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "below the minimum is invalid",
  #|                "data": 0.6,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores non-numbers",
  #|                "data": "x",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "minimum validation with signed integer",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "minimum": -2
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "negative above the minimum is valid",
  #|                "data": -1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "positive above the minimum is valid",
  #|                "data": 0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "boundary point is valid",
  #|                "data": -2,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "boundary point with float is valid",
  #|                "data": -2.0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "float below the minimum is invalid",
  #|                "data": -2.0001,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "int below the minimum is invalid",
  #|                "data": -3,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores non-numbers",
  #|                "data": "x",
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_multipleOf =
  #|[
  #|    {
  #|        "description": "by int",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "multipleOf": 2
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "int by int",
  #|                "data": 10,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "int by int fail",
  #|                "data": 7,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores non-numbers",
  #|                "data": "foo",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "by number",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "multipleOf": 1.5
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "zero is multiple of anything",
  #|                "data": 0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "4.5 is multiple of 1.5",
  #|                "data": 4.5,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "-4.5 is multiple of 1.5",
  #|                "data": -4.5,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "35 is not multiple of 1.5",
  #|                "data": 35,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "by small number",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "multipleOf": 0.0001
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "0.0075 is multiple of 0.0001",
  #|                "data": 0.0075,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "0.00751 is not multiple of 0.0001",
  #|                "data": 0.00751,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "float division = inf",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "integer", "multipleOf": 0.123456789
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "always invalid, but naive implementations may raise an overflow error",
  #|                "data": 1e308,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "small multiple of large integer",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "integer", "multipleOf": 1e-8
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any integer is a multiple of 1e-8",
  #|                "data": 12391239123,
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_not =
  #|[
  #|    {
  #|        "description": "not",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "not": {"type": "integer"}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "allowed",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "disallowed",
  #|                "data": 1,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "not multiple types",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "not": {"type": ["integer", "boolean"]}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "mismatch",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "other mismatch",
  #|                "data": true,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "not more complex schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "not": {
  #|                "type": "object",
  #|                "properties": {
  #|                    "foo": {
  #|                        "type": "string"
  #|                    }
  #|                }
  #|             }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "match",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "other match",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "mismatch",
  #|                "data": {"foo": "bar"},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "forbidden property",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": { 
  #|                    "not": {}
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "property present",
  #|                "data": {"foo": 1, "bar": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "property absent",
  #|                "data": {"bar": 1, "baz": 2},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "forbid everything with empty schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "not": {}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is invalid",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "string is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "boolean true is invalid",
  #|                "data": true,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "boolean false is invalid",
  #|                "data": false,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "null is invalid",
  #|                "data": null,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "object is invalid",
  #|                "data": {"foo": "bar"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty object is invalid",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "array is invalid",
  #|                "data": ["foo"],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty array is invalid",
  #|                "data": [],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "forbid everything with boolean schema true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "not": true
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is invalid",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "string is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "boolean true is invalid",
  #|                "data": true,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "boolean false is invalid",
  #|                "data": false,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "null is invalid",
  #|                "data": null,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "object is invalid",
  #|                "data": {"foo": "bar"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty object is invalid",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "array is invalid",
  #|                "data": ["foo"],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty array is invalid",
  #|                "data": [],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "allow everything with boolean schema false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "not": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "string is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "boolean true is valid",
  #|                "data": true,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "boolean false is valid",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "null is valid",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object is valid",
  #|                "data": {"foo": "bar"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "empty object is valid",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "array is valid",
  #|                "data": ["foo"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "empty array is valid",
  #|                "data": [],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "double negation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "not": { "not": {} }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any value is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "collect annotations inside a 'not', even if collection is disabled",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "not": {
  #|                "$comment": "this subschema must still produce annotations internally, even though the 'not' will ultimately discard them",
  #|                "anyOf": [
  #|                    true,
  #|                    { "properties": { "foo": true } }
  #|                ],
  #|                "unevaluatedProperties": false
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "unevaluated property",
  #|                "data": { "bar": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "annotations are still collected inside a 'not'",
  #|                "data": { "foo": 1 },
  #|                "valid": false
  #|            }
  #|        ]
  #|     }
  #|]

///|
let suite_oneOf =
  #|[
  #|    {
  #|        "description": "oneOf",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "oneOf": [
  #|                {
  #|                    "type": "integer"
  #|                },
  #|                {
  #|                    "minimum": 2
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "first oneOf valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "second oneOf valid",
  #|                "data": 2.5,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "both oneOf valid",
  #|                "data": 3,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "neither oneOf valid",
  #|                "data": 1.5,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "oneOf with base schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "string",
  #|            "oneOf" : [
  #|                {
  #|                    "minLength": 2
  #|                },
  #|                {
  #|                    "maxLength": 4
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "mismatch base schema",
  #|                "data": 3,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "one oneOf valid",
  #|                "data": "foobar",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "both oneOf valid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "oneOf with boolean schemas, all true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "oneOf": [true, true, true]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any value is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "oneOf with boolean schemas, one true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "oneOf": [true, false, false]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any value is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "oneOf with boolean schemas, more than one true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "oneOf": [true, true, false]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any value is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "oneOf with boolean schemas, all false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "oneOf": [false, false, false]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any value is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "oneOf complex types",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "oneOf": [
  #|                {
  #|                    "properties": {
  #|                        "bar": {"type": "integer"}
  #|                    },
  #|                    "required": ["bar"]
  #|                },
  #|                {
  #|                    "properties": {
  #|                        "foo": {"type": "string"}
  #|                    },
  #|                    "required": ["foo"]
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "first oneOf valid (complex)",
  #|                "data": {"bar": 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "second oneOf valid (complex)",
  #|                "data": {"foo": "baz"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "both oneOf valid (complex)",
  #|                "data": {"foo": "baz", "bar": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "neither oneOf valid (complex)",
  #|                "data": {"foo": 2, "bar": "quux"},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "oneOf with empty schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "oneOf": [
  #|                { "type": "number" },
  #|                {}
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "one valid - valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "both valid - invalid",
  #|                "data": 123,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "oneOf with required",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "object",
  #|            "oneOf": [
  #|                { "required": ["foo", "bar"] },
  #|                { "required": ["foo", "baz"] }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "both invalid - invalid",
  #|                "data": {"bar": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "first valid - valid",
  #|                "data": {"foo": 1, "bar": 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "second valid - valid",
  #|                "data": {"foo": 1, "baz": 3},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "both valid - invalid",
  #|                "data": {"foo": 1, "bar": 2, "baz" : 3},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "oneOf with missing optional property",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "oneOf": [
  #|                {
  #|                    "properties": {
  #|                        "bar": true,
  #|                        "baz": true
  #|                    },
  #|                    "required": ["bar"]
  #|                },
  #|                {
  #|                    "properties": {
  #|                        "foo": true
  #|                    },
  #|                    "required": ["foo"]
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "first oneOf valid",
  #|                "data": {"bar": 8},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "second oneOf valid",
  #|                "data": {"foo": "foo"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "both oneOf valid",
  #|                "data": {"foo": "foo", "bar": 8},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "neither oneOf valid",
  #|                "data": {"baz": "quux"},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "nested oneOf, to check validation semantics",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "oneOf": [
  #|                {
  #|                    "oneOf": [
  #|                        {
  #|                            "type": "null"
  #|                        }
  #|                    ]
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "null is valid",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "anything non-null is invalid",
  #|                "data": 123,
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_pattern =
  #|[
  #|    {
  #|        "description": "pattern validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "pattern": "^a*$"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a matching pattern is valid",
  #|                "data": "aaa",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a non-matching pattern is invalid",
  #|                "data": "abc",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores booleans",
  #|                "data": true,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores integers",
  #|                "data": 123,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores floats",
  #|                "data": 1.0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores null",
  #|                "data": null,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "pattern is not anchored",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "pattern": "a+"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "matches a substring",
  #|                "data": "xxaayy",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "pattern with Unicode property escape requires unicode mode",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "string",
  #|            "pattern": "^\\p{Letter}+$"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "ASCII letters match",
  #|                "data": "Hello",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "Non-ASCII letters match",
  #|                "data": "π",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "Digits do not match",
  #|                "data": "123",
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_patternProperties =
  #|[
  #|    {
  #|        "description":
  #|            "patternProperties validates properties matching a regex",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "patternProperties": {
  #|                "f.*o": {"type": "integer"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a single valid match is valid",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "multiple valid matches is valid",
  #|                "data": {"foo": 1, "foooooo" : 2},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a single invalid match is invalid",
  #|                "data": {"foo": "bar", "fooooo": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "multiple invalid matches is invalid",
  #|                "data": {"foo": "bar", "foooooo" : "baz"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores arrays",
  #|                "data": ["foo"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores strings",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores other non-objects",
  #|                "data": 12,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "multiple simultaneous patternProperties are validated",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "patternProperties": {
  #|                "a*": {"type": "integer"},
  #|                "aaa*": {"maximum": 20}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a single valid match is valid",
  #|                "data": {"a": 21},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a simultaneous match is valid",
  #|                "data": {"aaaa": 18},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "multiple matches is valid",
  #|                "data": {"a": 21, "aaaa": 18},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an invalid due to one is invalid",
  #|                "data": {"a": "bar"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an invalid due to the other is invalid",
  #|                "data": {"aaaa": 31},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an invalid due to both is invalid",
  #|                "data": {"aaa": "foo", "aaaa": 31},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "regexes are not anchored by default and are case sensitive",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "patternProperties": {
  #|                "[0-9]{2,}": { "type": "boolean" },
  #|                "X_": { "type": "string" }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "non recognized members are ignored",
  #|                "data": { "answer 1": "42" },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "recognized members are accounted for",
  #|                "data": { "a31b": null },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "regexes are case sensitive",
  #|                "data": { "a_x_3": 3 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "regexes are case sensitive, 2",
  #|                "data": { "a_X_3": 3 },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "patternProperties with boolean schemas",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "patternProperties": {
  #|                "f.*": true,
  #|                "b.*": false
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "object with property matching schema true is valid",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object with property matching schema false is invalid",
  #|                "data": {"bar": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "object with both properties is invalid",
  #|                "data": {"foo": 1, "bar": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "object with a property matching both true and false is invalid",
  #|                "data": {"foobar":1},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty object is valid",
  #|                "data": {},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "patternProperties with null valued instance properties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "patternProperties": {
  #|                "^.*bar$": {"type": "null"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "allows null values",
  #|                "data": {"foobar": null},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "patternProperties with Unicode property escape",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "object",
  #|            "patternProperties": {
  #|                "^\\p{Letter}+$": {
  #|                    "type": "number"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "Unicode letter property name matches",
  #|                "data": {
  #|                    "π": 1
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "Non-letter property name does not match pattern",
  #|                "data": {
  #|                    "123": 1
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_prefixItems =
  #|[
  #|    {
  #|        "description": "a schema given for prefixItems",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [
  #|                {"type": "integer"},
  #|                {"type": "string"}
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "correct types",
  #|                "data": [ 1, "foo" ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "wrong types",
  #|                "data": [ "foo", 1 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "incomplete array of items",
  #|                "data": [ 1 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "array with additional items",
  #|                "data": [ 1, "foo", true ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "empty array",
  #|                "data": [ ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "JavaScript pseudo-array is valid",
  #|                "data": {
  #|                    "0": "invalid",
  #|                    "1": "valid",
  #|                    "length": 2
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "prefixItems with boolean schemas",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [true, false]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "array with one item is valid",
  #|                "data": [ 1 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "array with two items is invalid",
  #|                "data": [ 1, "foo" ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty array is valid",
  #|                "data": [],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "additional items are allowed by default",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [{"type": "integer"}]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "only the first item is validated",
  #|                "data": [1, "foo", false],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "prefixItems with null instance elements",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [
  #|                {
  #|                    "type": "null"
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "allows null elements",
  #|                "data": [ null ],
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_properties =
  #|[
  #|    {
  #|        "description": "object properties validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {"type": "integer"},
  #|                "bar": {"type": "string"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "both properties present and valid is valid",
  #|                "data": {"foo": 1, "bar": "baz"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "one property invalid is invalid",
  #|                "data": {"foo": 1, "bar": {}},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "both properties invalid is invalid",
  #|                "data": {"foo": [], "bar": {}},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "doesn't invalidate other properties",
  #|                "data": {"quux": []},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores other non-objects",
  #|                "data": 12,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description":
  #|            "properties, patternProperties, additionalProperties interaction",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {"type": "array", "maxItems": 3},
  #|                "bar": {"type": "array"}
  #|            },
  #|            "patternProperties": {"f.o": {"minItems": 2}},
  #|            "additionalProperties": {"type": "integer"}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "property validates property",
  #|                "data": {"foo": [1, 2]},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "property invalidates property",
  #|                "data": {"foo": [1, 2, 3, 4]},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "patternProperty invalidates property",
  #|                "data": {"foo": []},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "patternProperty validates nonproperty",
  #|                "data": {"fxo": [1, 2]},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "patternProperty invalidates nonproperty",
  #|                "data": {"fxo": []},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "additionalProperty ignores property",
  #|                "data": {"bar": []},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "additionalProperty validates others",
  #|                "data": {"quux": 3},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "additionalProperty invalidates others",
  #|                "data": {"quux": "foo"},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "properties with boolean schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": true,
  #|                "bar": false
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "no property present is valid",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "only 'true' property present is valid",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "only 'false' property present is invalid",
  #|                "data": {"bar": 2},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "both properties present is invalid",
  #|                "data": {"foo": 1, "bar": 2},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "properties with escaped characters",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo\nbar": {"type": "number"},
  #|                "foo\"bar": {"type": "number"},
  #|                "foo\\bar": {"type": "number"},
  #|                "foo\rbar": {"type": "number"},
  #|                "foo\tbar": {"type": "number"},
  #|                "foo\fbar": {"type": "number"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "object with all numbers is valid",
  #|                "data": {
  #|                    "foo\nbar": 1,
  #|                    "foo\"bar": 1,
  #|                    "foo\\bar": 1,
  #|                    "foo\rbar": 1,
  #|                    "foo\tbar": 1,
  #|                    "foo\fbar": 1
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object with strings is invalid",
  #|                "data": {
  #|                    "foo\nbar": "1",
  #|                    "foo\"bar": "1",
  #|                    "foo\\bar": "1",
  #|                    "foo\rbar": "1",
  #|                    "foo\tbar": "1",
  #|                    "foo\fbar": "1"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "properties with null valued instance properties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {"type": "null"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "allows null values",
  #|                "data": {"foo": null},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "properties whose names are Javascript object property names",
  #|        "comment": "Ensure JS implementations don't universally consider e.g. __proto__ to always be present in an object.",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "__proto__": {"type": "number"},
  #|                "toString": {
  #|                    "properties": { "length": { "type": "string" } }
  #|                },
  #|                "constructor": {"type": "number"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "ignores arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores other non-objects",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "none of the properties mentioned",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "__proto__ not valid",
  #|                "data": { "__proto__": "foo" },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "toString not valid",
  #|                "data": { "toString": { "length": 37 } },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "constructor not valid",
  #|                "data": { "constructor": { "length": 37 } },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "all present and valid",
  #|                "data": { 
  #|                    "__proto__": 12,
  #|                    "toString": { "length": "foo" },
  #|                    "constructor": 37
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_propertyNames =
  #|[
  #|    {
  #|        "description": "propertyNames validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "propertyNames": {"maxLength": 3}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "all property names valid",
  #|                "data": {
  #|                    "f": {},
  #|                    "foo": {}
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "some property names invalid",
  #|                "data": {
  #|                    "foo": {},
  #|                    "foobar": {}
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "object without properties is valid",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores arrays",
  #|                "data": [1, 2, 3, 4],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores strings",
  #|                "data": "foobar",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores other non-objects",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores null",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores booleans",
  #|                "data": true,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "propertyNames validation with pattern",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "propertyNames": { "pattern": "^a+$" }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "matching property names valid",
  #|                "data": {
  #|                    "a": {},
  #|                    "aa": {},
  #|                    "aaa": {}
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-matching property name is invalid",
  #|                "data": {
  #|                    "aaA": {}
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "object without properties is valid",
  #|                "data": {},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "propertyNames with boolean schema true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "propertyNames": true
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "object with any properties is valid",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "empty object is valid",
  #|                "data": {},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "propertyNames with boolean schema false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "propertyNames": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "object with any properties is invalid",
  #|                "data": {"foo": 1},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty object is valid",
  #|                "data": {},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "propertyNames with const",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "propertyNames": {"const": "foo"}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "object with property foo is valid",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object with any other property is invalid",
  #|                "data": {"bar": 1},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty object is valid",
  #|                "data": {},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "propertyNames with enum",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "propertyNames": {"enum": ["foo", "bar"]}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "object with property foo is valid",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object with property foo and bar is valid",
  #|                "data": {"foo": 1, "bar": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object with any other property is invalid",
  #|                "data": {"baz": 1},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "empty object is valid",
  #|                "data": {},
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_ref =
  #|[
  #|    {
  #|        "description": "root pointer ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {"$ref": "#"}
  #|            },
  #|            "additionalProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "match",
  #|                "data": {"foo": false},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "recursive match",
  #|                "data": {"foo": {"foo": false}},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "mismatch",
  #|                "data": {"bar": false},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "recursive mismatch",
  #|                "data": {"foo": {"bar": false}},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "relative pointer ref to object",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {"type": "integer"},
  #|                "bar": {"$ref": "#/properties/foo"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "match",
  #|                "data": {"bar": 3},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "mismatch",
  #|                "data": {"bar": true},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "relative pointer ref to array",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [
  #|                {"type": "integer"},
  #|                {"$ref": "#/prefixItems/0"}
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "match array",
  #|                "data": [1, 2],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "mismatch array",
  #|                "data": [1, "foo"],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "escaped pointer ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$defs": {
  #|                "tilde~field": {"type": "integer"},
  #|                "slash/field": {"type": "integer"},
  #|                "percent%field": {"type": "integer"}
  #|            },
  #|            "properties": {
  #|                "tilde": {"$ref": "#/$defs/tilde~0field"},
  #|                "slash": {"$ref": "#/$defs/slash~1field"},
  #|                "percent": {"$ref": "#/$defs/percent%25field"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "slash invalid",
  #|                "data": {"slash": "aoeu"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "tilde invalid",
  #|                "data": {"tilde": "aoeu"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "percent invalid",
  #|                "data": {"percent": "aoeu"},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "slash valid",
  #|                "data": {"slash": 123},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "tilde valid",
  #|                "data": {"tilde": 123},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "percent valid",
  #|                "data": {"percent": 123},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "nested refs",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$defs": {
  #|                "a": {"type": "integer"},
  #|                "b": {"$ref": "#/$defs/a"},
  #|                "c": {"$ref": "#/$defs/b"}
  #|            },
  #|            "$ref": "#/$defs/c"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "nested ref valid",
  #|                "data": 5,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "nested ref invalid",
  #|                "data": "a",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "ref applies alongside sibling keywords",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$defs": {
  #|                "reffed": {
  #|                    "type": "array"
  #|                }
  #|            },
  #|            "properties": {
  #|                "foo": {
  #|                    "$ref": "#/$defs/reffed",
  #|                    "maxItems": 2
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "ref valid, maxItems valid",
  #|                "data": { "foo": [] },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ref valid, maxItems invalid",
  #|                "data": { "foo": [1, 2, 3] },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ref invalid",
  #|                "data": { "foo": "string" },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "remote ref, containing refs itself",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "https://json-schema.org/draft/2020-12/schema"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "remote ref valid",
  #|                "data": {"minLength": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "remote ref invalid",
  #|                "data": {"minLength": -1},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "property named $ref that is not a reference",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "$ref": {"type": "string"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "property named $ref valid",
  #|                "data": {"$ref": "a"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "property named $ref invalid",
  #|                "data": {"$ref": 2},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "property named $ref, containing an actual $ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "$ref": {"$ref": "#/$defs/is-string"}
  #|            },
  #|            "$defs": {
  #|                "is-string": {
  #|                    "type": "string"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "property named $ref valid",
  #|                "data": {"$ref": "a"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "property named $ref invalid",
  #|                "data": {"$ref": 2},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "$ref to boolean schema true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "#/$defs/bool",
  #|            "$defs": {
  #|                "bool": true
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any value is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "$ref to boolean schema false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "#/$defs/bool",
  #|            "$defs": {
  #|                "bool": false
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "any value is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "Recursive references between schemas",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://localhost:1234/draft2020-12/tree",
  #|            "description": "tree of nodes",
  #|            "type": "object",
  #|            "properties": {
  #|                "meta": {"type": "string"},
  #|                "nodes": {
  #|                    "type": "array",
  #|                    "items": {"$ref": "node"}
  #|                }
  #|            },
  #|            "required": ["meta", "nodes"],
  #|            "$defs": {
  #|                "node": {
  #|                    "$id": "http://localhost:1234/draft2020-12/node",
  #|                    "description": "node",
  #|                    "type": "object",
  #|                    "properties": {
  #|                        "value": {"type": "number"},
  #|                        "subtree": {"$ref": "tree"}
  #|                    },
  #|                    "required": ["value"]
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid tree",
  #|                "data": {
  #|                    "meta": "root",
  #|                    "nodes": [
  #|                        {
  #|                            "value": 1,
  #|                            "subtree": {
  #|                                "meta": "child",
  #|                                "nodes": [
  #|                                    {"value": 1.1},
  #|                                    {"value": 1.2}
  #|                                ]
  #|                            }
  #|                        },
  #|                        {
  #|                            "value": 2,
  #|                            "subtree": {
  #|                                "meta": "child",
  #|                                "nodes": [
  #|                                    {"value": 2.1},
  #|                                    {"value": 2.2}
  #|                                ]
  #|                            }
  #|                        }
  #|                    ]
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid tree",
  #|                "data": {
  #|                    "meta": "root",
  #|                    "nodes": [
  #|                        {
  #|                            "value": 1,
  #|                            "subtree": {
  #|                                "meta": "child",
  #|                                "nodes": [
  #|                                    {"value": "string is invalid"},
  #|                                    {"value": 1.2}
  #|                                ]
  #|                            }
  #|                        },
  #|                        {
  #|                            "value": 2,
  #|                            "subtree": {
  #|                                "meta": "child",
  #|                                "nodes": [
  #|                                    {"value": 2.1},
  #|                                    {"value": 2.2}
  #|                                ]
  #|                            }
  #|                        }
  #|                    ]
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "refs with quote",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo\"bar": {"$ref": "#/$defs/foo%22bar"}
  #|            },
  #|            "$defs": {
  #|                "foo\"bar": {"type": "number"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "object with numbers is valid",
  #|                "data": {
  #|                    "foo\"bar": 1
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object with strings is invalid",
  #|                "data": {
  #|                    "foo\"bar": "1"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "ref creates new scope when adjacent to keywords",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$defs": {
  #|                "A": {
  #|                    "unevaluatedProperties": false
  #|                }
  #|            },
  #|            "properties": {
  #|                "prop1": {
  #|                    "type": "string"
  #|                }
  #|            },
  #|            "$ref": "#/$defs/A"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "referenced subschema doesn't see annotations from properties",
  #|                "data": {
  #|                    "prop1": "match"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "naive replacement of $ref with its destination is not correct",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$defs": {
  #|                "a_string": { "type": "string" }
  #|            },
  #|            "enum": [
  #|                { "$ref": "#/$defs/a_string" }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "do not evaluate the $ref inside the enum, matching any string",
  #|                "data": "this is a string",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "do not evaluate the $ref inside the enum, definition exact match",
  #|                "data": { "type": "string" },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "match the enum exactly",
  #|                "data": { "$ref": "#/$defs/a_string" },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "refs with relative uris and defs",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://example.com/schema-relative-uri-defs1.json",
  #|            "properties": {
  #|                "foo": {
  #|                    "$id": "schema-relative-uri-defs2.json",
  #|                    "$defs": {
  #|                        "inner": {
  #|                            "properties": {
  #|                                "bar": { "type": "string" }
  #|                            }
  #|                        }
  #|                    },
  #|                    "$ref": "#/$defs/inner"
  #|                }
  #|            },
  #|            "$ref": "schema-relative-uri-defs2.json"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "invalid on inner field",
  #|                "data": {
  #|                    "foo": {
  #|                        "bar": 1
  #|                    },
  #|                    "bar": "a"
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "invalid on outer field",
  #|                "data": {
  #|                    "foo": {
  #|                        "bar": "a"
  #|                    },
  #|                    "bar": 1
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "valid on both fields",
  #|                "data": {
  #|                    "foo": {
  #|                        "bar": "a"
  #|                    },
  #|                    "bar": "a"
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "relative refs with absolute uris and defs",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://example.com/schema-refs-absolute-uris-defs1.json",
  #|            "properties": {
  #|                "foo": {
  #|                    "$id": "http://example.com/schema-refs-absolute-uris-defs2.json",
  #|                    "$defs": {
  #|                        "inner": {
  #|                            "properties": {
  #|                                "bar": { "type": "string" }
  #|                            }
  #|                        }
  #|                    },
  #|                    "$ref": "#/$defs/inner"
  #|                }
  #|            },
  #|            "$ref": "schema-refs-absolute-uris-defs2.json"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "invalid on inner field",
  #|                "data": {
  #|                    "foo": {
  #|                        "bar": 1
  #|                    },
  #|                    "bar": "a"
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "invalid on outer field",
  #|                "data": {
  #|                    "foo": {
  #|                        "bar": "a"
  #|                    },
  #|                    "bar": 1
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "valid on both fields",
  #|                "data": {
  #|                    "foo": {
  #|                        "bar": "a"
  #|                    },
  #|                    "bar": "a"
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "$id must be resolved against nearest parent, not just immediate parent",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://example.com/a.json",
  #|            "$defs": {
  #|                "x": {
  #|                    "$id": "http://example.com/b/c.json",
  #|                    "not": {
  #|                        "$defs": {
  #|                            "y": {
  #|                                "$id": "d.json",
  #|                                "type": "number"
  #|                            }
  #|                        }
  #|                    }
  #|                }
  #|            },
  #|            "allOf": [
  #|                {
  #|                    "$ref": "http://example.com/b/d.json"
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-number is invalid",
  #|                "data": "a",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "order of evaluation: $id and $ref",
  #|        "schema": {
  #|            "$comment": "$id must be evaluated before $ref to get the proper $ref destination",
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://example.com/draft2020-12/ref-and-id1/base.json",
  #|            "$ref": "int.json",
  #|            "$defs": {
  #|                "bigint": {
  #|                    "$comment": "canonical uri: https://example.com/ref-and-id1/int.json",
  #|                    "$id": "int.json",
  #|                    "maximum": 10
  #|                },
  #|                "smallint": {
  #|                    "$comment": "canonical uri: https://example.com/ref-and-id1-int.json",
  #|                    "$id": "/draft2020-12/ref-and-id1-int.json",
  #|                    "maximum": 2
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "data is valid against first definition",
  #|                "data": 5,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "data is invalid against first definition",
  #|                "data": 50,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "order of evaluation: $id and $anchor and $ref",
  #|        "schema": {
  #|            "$comment": "$id must be evaluated before $ref to get the proper $ref destination",
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://example.com/draft2020-12/ref-and-id2/base.json",
  #|            "$ref": "#bigint",
  #|            "$defs": {
  #|                "bigint": {
  #|                    "$comment": "canonical uri: /ref-and-id2/base.json#/$defs/bigint; another valid uri for this location: /ref-and-id2/base.json#bigint",
  #|                    "$anchor": "bigint",
  #|                    "maximum": 10
  #|                },
  #|                "smallint": {
  #|                    "$comment": "canonical uri: https://example.com/ref-and-id2#/$defs/smallint; another valid uri for this location: https://example.com/ref-and-id2/#bigint",
  #|                    "$id": "https://example.com/draft2020-12/ref-and-id2/",
  #|                    "$anchor": "bigint",
  #|                    "maximum": 2
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "data is valid against first definition",
  #|                "data": 5,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "data is invalid against first definition",
  #|                "data": 50,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "order of evaluation: $id and $ref on nested schema",
  #|        "schema": {
  #|            "$comment": "$id must be evaluated before $ref to get the proper $ref destination",
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://example.com/draft2020-12/ref-and-id3/base.json",
  #|            "$ref": "nested/foo.json",
  #|            "$defs": {
  #|                "foo": {
  #|                    "$comment": "canonical uri: https://example.com/draft2020-12/ref-and-id3/nested/foo.json",
  #|                    "$id": "nested/foo.json",
  #|                    "$ref": "./bar.json"
  #|                },
  #|                "bar": {
  #|                    "$comment": "canonical uri: https://example.com/draft2020-12/ref-and-id3/nested/bar.json",
  #|                    "$id": "nested/bar.json",
  #|                    "type": "number"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "data is valid against nested sibling",
  #|                "data": 5,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "data is invalid against nested sibling",
  #|                "data": "a",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "simple URN base URI with $ref via the URN",
  #|        "schema": {
  #|            "$comment": "URIs do not have to have HTTP(s) schemes",
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "urn:uuid:deadbeef-1234-ffff-ffff-4321feebdaed",
  #|            "minimum": 30,
  #|            "properties": {
  #|                "foo": {"$ref": "urn:uuid:deadbeef-1234-ffff-ffff-4321feebdaed"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid under the URN IDed schema",
  #|                "data": {"foo": 37},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid under the URN IDed schema",
  #|                "data": {"foo": 12},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "simple URN base URI with JSON pointer",
  #|        "schema": {
  #|            "$comment": "URIs do not have to have HTTP(s) schemes",
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "urn:uuid:deadbeef-1234-00ff-ff00-4321feebdaed",
  #|            "properties": {
  #|                "foo": {"$ref": "#/$defs/bar"}
  #|            },
  #|            "$defs": {
  #|                "bar": {"type": "string"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a string is valid",
  #|                "data": {"foo": "bar"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a non-string is invalid",
  #|                "data": {"foo": 12},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "URN base URI with NSS",
  #|        "schema": {
  #|            "$comment": "RFC 8141 §2.2",
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "urn:example:1/406/47452/2",
  #|            "properties": {
  #|                "foo": {"$ref": "#/$defs/bar"}
  #|            },
  #|            "$defs": {
  #|                "bar": {"type": "string"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a string is valid",
  #|                "data": {"foo": "bar"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a non-string is invalid",
  #|                "data": {"foo": 12},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "URN base URI with r-component",
  #|        "schema": {
  #|            "$comment": "RFC 8141 §2.3.1",
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "urn:example:foo-bar-baz-qux?+CCResolve:cc=uk",
  #|            "properties": {
  #|                "foo": {"$ref": "#/$defs/bar"}
  #|            },
  #|            "$defs": {
  #|                "bar": {"type": "string"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a string is valid",
  #|                "data": {"foo": "bar"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a non-string is invalid",
  #|                "data": {"foo": 12},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "URN base URI with q-component",
  #|        "schema": {
  #|            "$comment": "RFC 8141 §2.3.2",
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "urn:example:weather?=op=map&lat=39.56&lon=-104.85&datetime=1969-07-21T02:56:15Z",
  #|            "properties": {
  #|                "foo": {"$ref": "#/$defs/bar"}
  #|            },
  #|            "$defs": {
  #|                "bar": {"type": "string"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a string is valid",
  #|                "data": {"foo": "bar"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a non-string is invalid",
  #|                "data": {"foo": 12},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "URN base URI with URN and JSON pointer ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "urn:uuid:deadbeef-1234-0000-0000-4321feebdaed",
  #|            "properties": {
  #|                "foo": {"$ref": "urn:uuid:deadbeef-1234-0000-0000-4321feebdaed#/$defs/bar"}
  #|            },
  #|            "$defs": {
  #|                "bar": {"type": "string"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a string is valid",
  #|                "data": {"foo": "bar"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a non-string is invalid",
  #|                "data": {"foo": 12},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "URN base URI with URN and anchor ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "urn:uuid:deadbeef-1234-ff00-00ff-4321feebdaed",
  #|            "properties": {
  #|                "foo": {"$ref": "urn:uuid:deadbeef-1234-ff00-00ff-4321feebdaed#something"}
  #|            },
  #|            "$defs": {
  #|                "bar": {
  #|                    "$anchor": "something",
  #|                    "type": "string"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a string is valid",
  #|                "data": {"foo": "bar"},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a non-string is invalid",
  #|                "data": {"foo": 12},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "URN ref with nested pointer ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "urn:uuid:deadbeef-4321-ffff-ffff-1234feebdaed",
  #|            "$defs": {
  #|                "foo": {
  #|                    "$id": "urn:uuid:deadbeef-4321-ffff-ffff-1234feebdaed",
  #|                    "$defs": {"bar": {"type": "string"}},
  #|                    "$ref": "#/$defs/bar"
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a string is valid",
  #|                "data": "bar",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a non-string is invalid",
  #|                "data": 12,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "ref to if",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "http://example.com/ref/if",
  #|            "if": {
  #|                "$id": "http://example.com/ref/if",
  #|                "type": "integer"
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a non-integer is invalid due to the $ref",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an integer is valid",
  #|                "data": 12,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "ref to then",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "http://example.com/ref/then",
  #|            "then": {
  #|                "$id": "http://example.com/ref/then",
  #|                "type": "integer"
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a non-integer is invalid due to the $ref",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an integer is valid",
  #|                "data": 12,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "ref to else",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "http://example.com/ref/else",
  #|            "else": {
  #|                "$id": "http://example.com/ref/else",
  #|                "type": "integer"
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a non-integer is invalid due to the $ref",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an integer is valid",
  #|                "data": 12,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "ref with absolute-path-reference",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://example.com/ref/absref.json",
  #|            "$defs": {
  #|                "a": {
  #|                    "$id": "http://example.com/ref/absref/foobar.json",
  #|                    "type": "number"
  #|                },
  #|                "b": {
  #|                    "$id": "http://example.com/absref/foobar.json",
  #|                    "type": "string"
  #|                }
  #|            },
  #|            "$ref": "/absref/foobar.json"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "a string is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an integer is invalid",
  #|                "data": 12,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "$id with file URI still resolves pointers - *nix",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "file:///folder/file.json",
  #|            "$defs": {
  #|                "foo": {
  #|                    "type": "number"
  #|                }
  #|            },
  #|            "$ref": "#/$defs/foo"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-number is invalid",
  #|                "data": "a",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "$id with file URI still resolves pointers - windows",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "file:///c:/folder/file.json",
  #|            "$defs": {
  #|                "foo": {
  #|                    "type": "number"
  #|                }
  #|            },
  #|            "$ref": "#/$defs/foo"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-number is invalid",
  #|                "data": "a",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "empty tokens in $ref json-pointer",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$defs": {
  #|                "": {
  #|                    "$defs": {
  #|                        "": { "type": "number" }
  #|                    }
  #|                } 
  #|            },
  #|            "allOf": [
  #|                {
  #|                    "$ref": "#/$defs//$defs/"
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-number is invalid",
  #|                "data": "a",
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_refRemote =
  #|[
  #|    {
  #|        "description": "remote ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "http://localhost:1234/draft2020-12/integer.json"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "remote ref valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "remote ref invalid",
  #|                "data": "a",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "fragment within remote ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "http://localhost:1234/draft2020-12/subSchemas.json#/$defs/integer"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "remote fragment valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "remote fragment invalid",
  #|                "data": "a",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "anchor within remote ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "http://localhost:1234/draft2020-12/locationIndependentIdentifier.json#foo"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "remote anchor valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "remote anchor invalid",
  #|                "data": "a",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "ref within remote ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "http://localhost:1234/draft2020-12/subSchemas.json#/$defs/refToInteger"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "ref within ref valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ref within ref invalid",
  #|                "data": "a",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "base URI change",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://localhost:1234/draft2020-12/",
  #|            "items": {
  #|                "$id": "baseUriChange/",
  #|                "items": {"$ref": "folderInteger.json"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "base URI change ref valid",
  #|                "data": [[1]],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "base URI change ref invalid",
  #|                "data": [["a"]],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "base URI change - change folder",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://localhost:1234/draft2020-12/scope_change_defs1.json",
  #|            "type" : "object",
  #|            "properties": {"list": {"$ref": "baseUriChangeFolder/"}},
  #|            "$defs": {
  #|                "baz": {
  #|                    "$id": "baseUriChangeFolder/",
  #|                    "type": "array",
  #|                    "items": {"$ref": "folderInteger.json"}
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is valid",
  #|                "data": {"list": [1]},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "string is invalid",
  #|                "data": {"list": ["a"]},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "base URI change - change folder in subschema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://localhost:1234/draft2020-12/scope_change_defs2.json",
  #|            "type" : "object",
  #|            "properties": {"list": {"$ref": "baseUriChangeFolderInSubschema/#/$defs/bar"}},
  #|            "$defs": {
  #|                "baz": {
  #|                    "$id": "baseUriChangeFolderInSubschema/",
  #|                    "$defs": {
  #|                        "bar": {
  #|                            "type": "array",
  #|                            "items": {"$ref": "folderInteger.json"}
  #|                        }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is valid",
  #|                "data": {"list": [1]},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "string is invalid",
  #|                "data": {"list": ["a"]},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "root ref in remote ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://localhost:1234/draft2020-12/object",
  #|            "type": "object",
  #|            "properties": {
  #|                "name": {"$ref": "name-defs.json#/$defs/orNull"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "string is valid",
  #|                "data": {
  #|                    "name": "foo"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "null is valid",
  #|                "data": {
  #|                    "name": null
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object is invalid",
  #|                "data": {
  #|                    "name": {
  #|                        "name": null
  #|                    }
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "remote ref with ref to defs",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://localhost:1234/draft2020-12/schema-remote-ref-ref-defs1.json",
  #|            "$ref": "ref-and-defs.json"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "invalid",
  #|                "data": {
  #|                    "bar": 1
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "valid",
  #|                "data": {
  #|                    "bar": "a"
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "Location-independent identifier in remote ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "http://localhost:1234/draft2020-12/locationIndependentIdentifier.json#/$defs/refToInteger"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "integer is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "string is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "retrieved nested refs resolve relative to their URI not $id",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "http://localhost:1234/draft2020-12/some-id",
  #|            "properties": {
  #|                "name": {"$ref": "nested/foo-ref-string.json"}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is invalid",
  #|                "data": {
  #|                    "name": {"foo":  1}
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "string is valid",
  #|                "data": {
  #|                    "name": {"foo":  "a"}
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "remote HTTP ref with different $id",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "http://localhost:1234/draft2020-12/different-id-ref-string.json"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is invalid",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "string is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "remote HTTP ref with different URN $id",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "http://localhost:1234/draft2020-12/urn-ref-string.json"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is invalid",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "string is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "remote HTTP ref with nested absolute ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "http://localhost:1234/draft2020-12/nested-absolute-ref-to-string.json"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is invalid",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "string is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "$ref to $ref finds detached $anchor",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "http://localhost:1234/draft2020-12/detached-ref.json#/$defs/foo"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "number is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-number is invalid",
  #|                "data": "a",
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_required =
  #|[
  #|    {
  #|        "description": "required validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {},
  #|                "bar": {}
  #|            },
  #|            "required": ["foo"]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "present required property is valid",
  #|                "data": {"foo": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-present required property is invalid",
  #|                "data": {"bar": 1},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "ignores arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores strings",
  #|                "data": "",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores other non-objects",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores null",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description":"ignores boolean",
  #|                "data": true,
  #|                "valid": true
  #|
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "required default validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {}
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "not required by default",
  #|                "data": {},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "required with empty array",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {}
  #|            },
  #|            "required": []
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "property not required",
  #|                "data": {},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "required with escaped characters",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "required": [
  #|                "foo\nbar",
  #|                "foo\"bar",
  #|                "foo\\bar",
  #|                "foo\rbar",
  #|                "foo\tbar",
  #|                "foo\fbar"
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "object with all properties present is valid",
  #|                "data": {
  #|                    "foo\nbar": 1,
  #|                    "foo\"bar": 1,
  #|                    "foo\\bar": 1,
  #|                    "foo\rbar": 1,
  #|                    "foo\tbar": 1,
  #|                    "foo\fbar": 1
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object with some properties missing is invalid",
  #|                "data": {
  #|                    "foo\nbar": "1",
  #|                    "foo\"bar": "1"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "required properties whose names are Javascript object property names",
  #|        "comment": "Ensure JS implementations don't universally consider e.g. __proto__ to always be present in an object.",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "required": ["__proto__", "toString", "constructor"]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "ignores arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores other non-objects",
  #|                "data": 12,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "none of the properties mentioned",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "__proto__ present",
  #|                "data": { "__proto__": "foo" },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "toString present",
  #|                "data": { "toString": { "length": 37 } },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "constructor present",
  #|                "data": { "constructor": { "length": 37 } },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "all present",
  #|                "data": { 
  #|                    "__proto__": 12,
  #|                    "toString": { "length": "foo" },
  #|                    "constructor": 37
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_type =
  #|[
  #|    {
  #|        "description": "integer type matches integers",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "integer"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "an integer is an integer",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a float with zero fractional part is an integer",
  #|                "data": 1.0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a float is not an integer",
  #|                "data": 1.1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a string is not an integer",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a string is still not an integer, even if it looks like one",
  #|                "data": "1",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an object is not an integer",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an array is not an integer",
  #|                "data": [],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a boolean is not an integer",
  #|                "data": true,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "null is not an integer",
  #|                "data": null,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "number type matches numbers",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "number"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "an integer is a number",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a float with zero fractional part is a number (and an integer)",
  #|                "data": 1.0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a float is a number",
  #|                "data": 1.1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a string is not a number",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a string is still not a number, even if it looks like one",
  #|                "data": "1",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an object is not a number",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an array is not a number",
  #|                "data": [],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a boolean is not a number",
  #|                "data": true,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "null is not a number",
  #|                "data": null,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "string type matches strings",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "string"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "1 is not a string",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a float is not a string",
  #|                "data": 1.1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a string is a string",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a string is still a string, even if it looks like a number",
  #|                "data": "1",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an empty string is still a string",
  #|                "data": "",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an object is not a string",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an array is not a string",
  #|                "data": [],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a boolean is not a string",
  #|                "data": true,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "null is not a string",
  #|                "data": null,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "object type matches objects",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "object"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "an integer is not an object",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a float is not an object",
  #|                "data": 1.1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a string is not an object",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an object is an object",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "an array is not an object",
  #|                "data": [],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a boolean is not an object",
  #|                "data": true,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "null is not an object",
  #|                "data": null,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "array type matches arrays",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "array"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "an integer is not an array",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a float is not an array",
  #|                "data": 1.1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a string is not an array",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an object is not an array",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an array is an array",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a boolean is not an array",
  #|                "data": true,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "null is not an array",
  #|                "data": null,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "boolean type matches booleans",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "boolean"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "an integer is not a boolean",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "zero is not a boolean",
  #|                "data": 0,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a float is not a boolean",
  #|                "data": 1.1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a string is not a boolean",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an empty string is not a boolean",
  #|                "data": "",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an object is not a boolean",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an array is not a boolean",
  #|                "data": [],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "true is a boolean",
  #|                "data": true,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "false is a boolean",
  #|                "data": false,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "null is not a boolean",
  #|                "data": null,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "null type matches only the null object",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "null"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "an integer is not null",
  #|                "data": 1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a float is not null",
  #|                "data": 1.1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "zero is not null",
  #|                "data": 0,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a string is not null",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an empty string is not null",
  #|                "data": "",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an object is not null",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an array is not null",
  #|                "data": [],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "true is not null",
  #|                "data": true,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "false is not null",
  #|                "data": false,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "null is null",
  #|                "data": null,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "multiple types can be specified in an array",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": ["integer", "string"]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "an integer is valid",
  #|                "data": 1,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a string is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a float is invalid",
  #|                "data": 1.1,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an object is invalid",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "an array is invalid",
  #|                "data": [],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a boolean is invalid",
  #|                "data": true,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "null is invalid",
  #|                "data": null,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "type as array with one item",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": ["string"]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "string is valid",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "number is invalid",
  #|                "data": 123,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "type: array or object",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": ["array", "object"]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "array is valid",
  #|                "data": [1,2,3],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object is valid",
  #|                "data": {"foo": 123},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "number is invalid",
  #|                "data": 123,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "string is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "null is invalid",
  #|                "data": null,
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "type: array, object or null",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": ["array", "object", "null"]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "array is valid",
  #|                "data": [1,2,3],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "object is valid",
  #|                "data": {"foo": 123},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "null is valid",
  #|                "data": null,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "number is invalid",
  #|                "data": 123,
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "string is invalid",
  #|                "data": "foo",
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_unevaluatedItems =
  #|[
  #|    {
  #|        "description": "unevaluatedItems true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "unevaluatedItems": true
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated items",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated items",
  #|                "data": ["foo"],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated items",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated items",
  #|                "data": ["foo"],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems as schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "unevaluatedItems": { "type": "string" }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated items",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with valid unevaluated items",
  #|                "data": ["foo"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with invalid unevaluated items",
  #|                "data": [42],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with uniform items",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "items": { "type": "string" },
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "unevaluatedItems doesn't apply",
  #|                "data": ["foo", "bar"],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with tuple",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [
  #|                { "type": "string" }
  #|            ],
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated items",
  #|                "data": ["foo"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated items",
  #|                "data": ["foo", "bar"],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with items and prefixItems",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [
  #|                { "type": "string" }
  #|            ],
  #|            "items": true,
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "unevaluatedItems doesn't apply",
  #|                "data": ["foo", 42],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with items",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "items": {"type": "number"},
  #|            "unevaluatedItems": {"type": "string"}
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid under items",
  #|                "comment": "no elements are considered by unevaluatedItems",
  #|                "data": [5, 6, 7, 8],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid under items",
  #|                "data": ["foo", "bar", "baz"],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with nested tuple",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [
  #|                { "type": "string" }
  #|            ],
  #|            "allOf": [
  #|                {
  #|                    "prefixItems": [
  #|                        true,
  #|                        { "type": "number" }
  #|                    ]
  #|                }
  #|            ],
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated items",
  #|                "data": ["foo", 42],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated items",
  #|                "data": ["foo", 42, true],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with nested items",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "unevaluatedItems": {"type": "boolean"},
  #|            "anyOf": [
  #|                { "items": {"type": "string"} },
  #|                true
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with only (valid) additional items",
  #|                "data": [true, false],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with no additional items",
  #|                "data": ["yes", "no"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with invalid additional item",
  #|                "data": ["yes", false],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with nested prefixItems and items",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "prefixItems": [
  #|                        { "type": "string" }
  #|                    ],
  #|                    "items": true
  #|                }
  #|            ],
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no additional items",
  #|                "data": ["foo"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with additional items",
  #|                "data": ["foo", 42, true],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with nested unevaluatedItems",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "prefixItems": [
  #|                        { "type": "string" }
  #|                    ]
  #|                },
  #|                { "unevaluatedItems": true }
  #|            ],
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no additional items",
  #|                "data": ["foo"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with additional items",
  #|                "data": ["foo", 42, true],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with anyOf",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [
  #|                { "const": "foo" }
  #|            ],
  #|            "anyOf": [
  #|                {
  #|                    "prefixItems": [
  #|                        true,
  #|                        { "const": "bar" }
  #|                    ]
  #|                },
  #|                {
  #|                    "prefixItems": [
  #|                        true,
  #|                        true,
  #|                        { "const": "baz" }
  #|                    ]
  #|                }
  #|            ],
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "when one schema matches and has no unevaluated items",
  #|                "data": ["foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "when one schema matches and has unevaluated items",
  #|                "data": ["foo", "bar", 42],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "when two schemas match and has no unevaluated items",
  #|                "data": ["foo", "bar", "baz"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "when two schemas match and has unevaluated items",
  #|                "data": ["foo", "bar", "baz", 42],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with oneOf",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [
  #|                { "const": "foo" }
  #|            ],
  #|            "oneOf": [
  #|                {
  #|                    "prefixItems": [
  #|                        true,
  #|                        { "const": "bar" }
  #|                    ]
  #|                },
  #|                {
  #|                    "prefixItems": [
  #|                        true,
  #|                        { "const": "baz" }
  #|                    ]
  #|                }
  #|            ],
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated items",
  #|                "data": ["foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated items",
  #|                "data": ["foo", "bar", 42],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with not",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [
  #|                { "const": "foo" }
  #|            ],
  #|            "not": {
  #|                "not": {
  #|                    "prefixItems": [
  #|                        true,
  #|                        { "const": "bar" }
  #|                    ]
  #|                }
  #|            },
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with unevaluated items",
  #|                "data": ["foo", "bar"],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with if/then/else",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [
  #|                { "const": "foo" }
  #|            ],
  #|            "if": {
  #|                "prefixItems": [
  #|                    true,
  #|                    { "const": "bar" }
  #|                ]
  #|            },
  #|            "then": {
  #|                "prefixItems": [
  #|                    true,
  #|                    true,
  #|                    { "const": "then" }
  #|                ]
  #|            },
  #|            "else": {
  #|                "prefixItems": [
  #|                    true,
  #|                    true,
  #|                    true,
  #|                    { "const": "else" }
  #|                ]
  #|            },
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "when if matches and it has no unevaluated items",
  #|                "data": ["foo", "bar", "then"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "when if matches and it has unevaluated items",
  #|                "data": ["foo", "bar", "then", "else"],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "when if doesn't match and it has no unevaluated items",
  #|                "data": ["foo", 42, 42, "else"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "when if doesn't match and it has unevaluated items",
  #|                "data": ["foo", 42, 42, "else", 42],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with boolean schemas",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [true],
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated items",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated items",
  #|                "data": ["foo"],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with $ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "#/$defs/bar",
  #|            "prefixItems": [
  #|                { "type": "string" }
  #|            ],
  #|            "unevaluatedItems": false,
  #|            "$defs": {
  #|              "bar": {
  #|                  "prefixItems": [
  #|                      true,
  #|                      { "type": "string" }
  #|                  ]
  #|              }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated items",
  #|                "data": ["foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated items",
  #|                "data": ["foo", "bar", "baz"],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems before $ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "unevaluatedItems": false,
  #|            "prefixItems": [
  #|                { "type": "string" }
  #|            ],
  #|            "$ref": "#/$defs/bar",
  #|            "$defs": {
  #|              "bar": {
  #|                  "prefixItems": [
  #|                      true,
  #|                      { "type": "string" }
  #|                  ]
  #|              }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated items",
  #|                "data": ["foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated items",
  #|                "data": ["foo", "bar", "baz"],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with $dynamicRef",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://example.com/unevaluated-items-with-dynamic-ref/derived",
  #|
  #|            "$ref": "./baseSchema",
  #|
  #|            "$defs": {
  #|                "derived": {
  #|                    "$dynamicAnchor": "addons",
  #|                    "prefixItems": [
  #|                        true,
  #|                        { "type": "string" }
  #|                    ]
  #|                },
  #|                "baseSchema": {
  #|                    "$id": "./baseSchema",
  #|
  #|                    "$comment": "unevaluatedItems comes first so it's more likely to catch bugs with implementations that are sensitive to keyword ordering",
  #|                    "unevaluatedItems": false,
  #|                    "type": "array",
  #|                    "prefixItems": [
  #|                        { "type": "string" }
  #|                    ],
  #|                    "$dynamicRef": "#addons",
  #|
  #|                    "$defs": {
  #|                        "defaultAddons": {
  #|                            "$comment": "Needed to satisfy the bookending requirement",
  #|                            "$dynamicAnchor": "addons"
  #|                        }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated items",
  #|                "data": ["foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated items",
  #|                "data": ["foo", "bar", "baz"],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems can't see inside cousins",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "prefixItems": [ true ]
  #|                },
  #|                { "unevaluatedItems": false }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "always fails",
  #|                "data": [ 1 ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "item is evaluated in an uncle schema to unevaluatedItems",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {
  #|                    "prefixItems": [
  #|                        { "type": "string" }
  #|                    ],
  #|                    "unevaluatedItems": false
  #|                  }
  #|            },
  #|            "anyOf": [
  #|                {
  #|                    "properties": {
  #|                        "foo": {
  #|                            "prefixItems": [
  #|                                true,
  #|                                { "type": "string" }
  #|                            ]
  #|                        }
  #|                    }
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "no extra items",
  #|                "data": {
  #|                    "foo": [
  #|                        "test"
  #|                    ]
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "uncle keyword evaluation is not significant",
  #|                "data": {
  #|                    "foo": [
  #|                        "test",
  #|                        "test"
  #|                    ]
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems depends on adjacent contains",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [true],
  #|            "contains": {"type": "string"},
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "second item is evaluated by contains",
  #|                "data": [ 1, "foo" ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "contains fails, second item is not evaluated",
  #|                "data": [ 1, 2 ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "contains passes, second item is not evaluated",
  #|                "data": [ 1, 2, "foo" ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems depends on multiple nested contains",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                { "contains": { "multipleOf": 2 } },
  #|                { "contains": { "multipleOf": 3 } }
  #|            ],
  #|            "unevaluatedItems": { "multipleOf": 5 }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "5 not evaluated, passes unevaluatedItems",
  #|                "data": [ 2, 3, 4, 5, 6 ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "7 not evaluated, fails unevaluatedItems",
  #|                "data": [ 2, 3, 4, 7, 8 ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems and contains interact to control item dependency relationship",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "if": {
  #|                "contains": {"const": "a"}
  #|            },
  #|            "then": {
  #|                "if": {
  #|                    "contains": {"const": "b"}
  #|                },
  #|                "then": {
  #|                    "if": {
  #|                        "contains": {"const": "c"}
  #|                    }
  #|                }
  #|            },
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "empty array is valid",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "only a's are valid",
  #|                "data": [ "a", "a" ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a's and b's are valid",
  #|                "data": [ "a", "b", "a", "b", "a" ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a's, b's and c's are valid",
  #|                "data": [ "c", "a", "c", "c", "b", "a" ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "only b's are invalid",
  #|                "data": [ "b", "b" ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "only c's are invalid",
  #|                "data": [ "c", "c" ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "only b's and c's are invalid",
  #|                "data": [ "c", "b", "c", "b", "c" ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "only a's and c's are invalid",
  #|                "data": [ "c", "a", "c", "a", "c" ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description" : "unevaluatedItems with minContains = 0",
  #|        "schema" : {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "contains": {"type": "string"},
  #|            "minContains": 0,
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests" : [
  #|            {
  #|                "description": "empty array is valid",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "no items evaluated by contains",
  #|                "data": [0],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "some but not all items evaluated by contains",
  #|                "data": ["foo", 0],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "all items evaluated by contains",
  #|                "data": ["foo", "bar"],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "non-array instances are valid",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "ignores booleans",
  #|                "data": true,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores integers",
  #|                "data": 123,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores floats",
  #|                "data": 1.0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores objects",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores strings",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores null",
  #|                "data": null,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems with null instance elements",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "unevaluatedItems": {
  #|                "type": "null"
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "allows null elements",
  #|                "data": [ null ],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedItems can see annotations from if without then and else",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "if": {
  #|                "prefixItems": [{"const": "a"}]
  #|            },
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid in case if is evaluated",
  #|                "data": [ "a" ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid in case if is evaluated",
  #|                "data": [ "b" ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "Evaluated items collection needs to consider instance location",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [
  #|                {
  #|                    "prefixItems": [
  #|                        true,
  #|                        { "type": "string" }
  #|                    ]
  #|                }
  #|            ],
  #|            "unevaluatedItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with an unevaluated item that exists at another location",
  #|                "data": [
  #|                    ["foo", "bar"],
  #|                    "bar"
  #|                ],
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_unevaluatedProperties =
  #|[
  #|    {
  #|        "description": "unevaluatedProperties true",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "unevaluatedProperties": true
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated properties",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties schema",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "unevaluatedProperties": {
  #|                "type": "string",
  #|                "minLength": 3
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated properties",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with valid unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with invalid unevaluated properties",
  #|                "data": {
  #|                    "foo": "fo"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated properties",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with adjacent properties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with adjacent patternProperties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "patternProperties": {
  #|                "^foo": { "type": "string" }
  #|            },
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with adjacent bool additionalProperties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "object",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "additionalProperties": true,
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no additional properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with additional properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with adjacent non-bool additionalProperties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "type": "object",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "additionalProperties": {"type": "string"},
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no additional properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with additional properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with nested properties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "allOf": [
  #|                {
  #|                    "properties": {
  #|                        "bar": { "type": "string" }
  #|                    }
  #|                }
  #|            ],
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no additional properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with additional properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar",
  #|                    "baz": "baz"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with nested patternProperties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "allOf": [
  #|              {
  #|                  "patternProperties": {
  #|                      "^bar": { "type": "string" }
  #|                  }
  #|              }
  #|            ],
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no additional properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with additional properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar",
  #|                    "baz": "baz"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with nested additionalProperties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "allOf": [
  #|                {
  #|                    "additionalProperties": true
  #|                }
  #|            ],
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no additional properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with additional properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with nested unevaluatedProperties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "allOf": [
  #|                {
  #|                    "unevaluatedProperties": true
  #|                }
  #|            ],
  #|            "unevaluatedProperties": {
  #|                "type": "string",
  #|                "maxLength": 2
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with anyOf",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "anyOf": [
  #|                {
  #|                    "properties": {
  #|                        "bar": { "const": "bar" }
  #|                    },
  #|                    "required": ["bar"]
  #|                },
  #|                {
  #|                    "properties": {
  #|                        "baz": { "const": "baz" }
  #|                    },
  #|                    "required": ["baz"]
  #|                },
  #|                {
  #|                    "properties": {
  #|                        "quux": { "const": "quux" }
  #|                    },
  #|                    "required": ["quux"]
  #|                }
  #|            ],
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "when one matches and has no unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "when one matches and has unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar",
  #|                    "baz": "not-baz"
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "when two match and has no unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar",
  #|                    "baz": "baz"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "when two match and has unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar",
  #|                    "baz": "baz",
  #|                    "quux": "not-quux"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with oneOf",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "oneOf": [
  #|                {
  #|                    "properties": {
  #|                        "bar": { "const": "bar" }
  #|                    },
  #|                    "required": ["bar"]
  #|                },
  #|                {
  #|                    "properties": {
  #|                        "baz": { "const": "baz" }
  #|                    },
  #|                    "required": ["baz"]
  #|                }
  #|            ],
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar",
  #|                    "quux": "quux"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with not",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "not": {
  #|                "not": {
  #|                    "properties": {
  #|                        "bar": { "const": "bar" }
  #|                    },
  #|                    "required": ["bar"]
  #|                }
  #|            },
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with if/then/else",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "if": {
  #|                "properties": {
  #|                    "foo": { "const": "then" }
  #|                },
  #|                "required": ["foo"]
  #|            },
  #|            "then": {
  #|                "properties": {
  #|                    "bar": { "type": "string" }
  #|                },
  #|                "required": ["bar"]
  #|            },
  #|            "else": {
  #|                "properties": {
  #|                    "baz": { "type": "string" }
  #|                },
  #|                "required": ["baz"]
  #|            },
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "when if is true and has no unevaluated properties",
  #|                "data": {
  #|                    "foo": "then",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "when if is true and has unevaluated properties",
  #|                "data": {
  #|                    "foo": "then",
  #|                    "bar": "bar",
  #|                    "baz": "baz"
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "when if is false and has no unevaluated properties",
  #|                "data": {
  #|                    "baz": "baz"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "when if is false and has unevaluated properties",
  #|                "data": {
  #|                    "foo": "else",
  #|                    "baz": "baz"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with if/then/else, then not defined",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "if": {
  #|                "properties": {
  #|                    "foo": { "const": "then" }
  #|                },
  #|                "required": ["foo"]
  #|            },
  #|            "else": {
  #|                "properties": {
  #|                    "baz": { "type": "string" }
  #|                },
  #|                "required": ["baz"]
  #|            },
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "when if is true and has no unevaluated properties",
  #|                "data": {
  #|                    "foo": "then"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "when if is true and has unevaluated properties",
  #|                "data": {
  #|                    "foo": "then",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "when if is false and has no unevaluated properties",
  #|                "data": {
  #|                    "baz": "baz"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "when if is false and has unevaluated properties",
  #|                "data": {
  #|                    "foo": "else",
  #|                    "baz": "baz"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with if/then/else, else not defined",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "if": {
  #|                "properties": {
  #|                    "foo": { "const": "then" }
  #|                },
  #|                "required": ["foo"]
  #|            },
  #|            "then": {
  #|                "properties": {
  #|                    "bar": { "type": "string" }
  #|                },
  #|                "required": ["bar"]
  #|            },
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "when if is true and has no unevaluated properties",
  #|                "data": {
  #|                    "foo": "then",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "when if is true and has unevaluated properties",
  #|                "data": {
  #|                    "foo": "then",
  #|                    "bar": "bar",
  #|                    "baz": "baz"
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "when if is false and has no unevaluated properties",
  #|                "data": {
  #|                    "baz": "baz"
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "when if is false and has unevaluated properties",
  #|                "data": {
  #|                    "foo": "else",
  #|                    "baz": "baz"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with dependentSchemas",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "dependentSchemas": {
  #|                "foo": {
  #|                    "properties": {
  #|                        "bar": { "const": "bar" }
  #|                    },
  #|                    "required": ["bar"]
  #|                }
  #|            },
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated properties",
  #|                "data": {
  #|                    "bar": "bar"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with boolean schemas",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "allOf": [true],
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated properties",
  #|                "data": {
  #|                    "bar": "bar"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with $ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$ref": "#/$defs/bar",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "unevaluatedProperties": false,
  #|            "$defs": {
  #|                "bar": {
  #|                    "properties": {
  #|                        "bar": { "type": "string" }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar",
  #|                    "baz": "baz"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties before $ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "unevaluatedProperties": false,
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "$ref": "#/$defs/bar",
  #|            "$defs": {
  #|                "bar": {
  #|                    "properties": {
  #|                        "bar": { "type": "string" }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar",
  #|                    "baz": "baz"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with $dynamicRef",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$id": "https://example.com/unevaluated-properties-with-dynamic-ref/derived",
  #|
  #|            "$ref": "./baseSchema",
  #|
  #|            "$defs": {
  #|                "derived": {
  #|                    "$dynamicAnchor": "addons",
  #|                    "properties": {
  #|                        "bar": { "type": "string" }
  #|                    }
  #|                },
  #|                "baseSchema": {
  #|                    "$id": "./baseSchema",
  #|
  #|                    "$comment": "unevaluatedProperties comes first so it's more likely to catch bugs with implementations that are sensitive to keyword ordering",
  #|                    "unevaluatedProperties": false,
  #|                    "properties": {
  #|                        "foo": { "type": "string" }
  #|                    },
  #|                    "$dynamicRef": "#addons",
  #|
  #|                    "$defs": {
  #|                        "defaultAddons": {
  #|                            "$comment": "Needed to satisfy the bookending requirement",
  #|                            "$dynamicAnchor": "addons"
  #|                        }
  #|                    }
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar",
  #|                    "baz": "baz"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties can't see inside cousins",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "properties": {
  #|                        "foo": true
  #|                    }
  #|                },
  #|                {
  #|                    "unevaluatedProperties": false
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "always fails",
  #|                "data": {
  #|                    "foo": 1
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties can't see inside cousins (reverse order)",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "unevaluatedProperties": false
  #|                },
  #|                {
  #|                    "properties": {
  #|                        "foo": true
  #|                    }
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "always fails",
  #|                "data": {
  #|                    "foo": 1
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "nested unevaluatedProperties, outer false, inner true, properties outside",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "allOf": [
  #|                {
  #|                    "unevaluatedProperties": true
  #|                }
  #|            ],
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "nested unevaluatedProperties, outer false, inner true, properties inside",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "properties": {
  #|                        "foo": { "type": "string" }
  #|                    },
  #|                    "unevaluatedProperties": true
  #|                }
  #|            ],
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "nested unevaluatedProperties, outer true, inner false, properties outside",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": { "type": "string" }
  #|            },
  #|            "allOf": [
  #|                {
  #|                    "unevaluatedProperties": false
  #|                }
  #|            ],
  #|            "unevaluatedProperties": true
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "with nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "nested unevaluatedProperties, outer true, inner false, properties inside",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "properties": {
  #|                        "foo": { "type": "string" }
  #|                    },
  #|                    "unevaluatedProperties": false
  #|                }
  #|            ],
  #|            "unevaluatedProperties": true
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "cousin unevaluatedProperties, true and false, true with properties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "properties": {
  #|                        "foo": { "type": "string" }
  #|                    },
  #|                    "unevaluatedProperties": true
  #|                },
  #|                {
  #|                    "unevaluatedProperties": false
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "with nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "cousin unevaluatedProperties, true and false, false with properties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "unevaluatedProperties": true
  #|                },
  #|                {
  #|                    "properties": {
  #|                        "foo": { "type": "string" }
  #|                    },
  #|                    "unevaluatedProperties": false
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with no nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with nested unevaluated properties",
  #|                "data": {
  #|                    "foo": "foo",
  #|                    "bar": "bar"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "property is evaluated in an uncle schema to unevaluatedProperties",
  #|        "comment": "see https://stackoverflow.com/questions/66936884/deeply-nested-unevaluatedproperties-and-their-expectations",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {
  #|                    "properties": {
  #|                        "bar": {
  #|                            "type": "string"
  #|                        }
  #|                    },
  #|                    "unevaluatedProperties": false
  #|                  }
  #|            },
  #|            "anyOf": [
  #|                {
  #|                    "properties": {
  #|                        "foo": {
  #|                            "properties": {
  #|                                "faz": {
  #|                                    "type": "string"
  #|                                }
  #|                            }
  #|                        }
  #|                    }
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "no extra properties",
  #|                "data": {
  #|                    "foo": {
  #|                        "bar": "test"
  #|                    }
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "uncle keyword evaluation is not significant",
  #|                "data": {
  #|                    "foo": {
  #|                        "bar": "test",
  #|                        "faz": "test"
  #|                    }
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "in-place applicator siblings, allOf has unevaluated",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "properties": {
  #|                        "foo": true
  #|                    },
  #|                    "unevaluatedProperties": false
  #|                }
  #|            ],
  #|            "anyOf": [
  #|                {
  #|                    "properties": {
  #|                        "bar": true
  #|                    }
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "base case: both properties present",
  #|                "data": {
  #|                    "foo": 1,
  #|                    "bar": 1
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "in place applicator siblings, bar is missing",
  #|                "data": {
  #|                    "foo": 1
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "in place applicator siblings, foo is missing",
  #|                "data": {
  #|                    "bar": 1
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "in-place applicator siblings, anyOf has unevaluated",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "allOf": [
  #|                {
  #|                    "properties": {
  #|                        "foo": true
  #|                    }
  #|                }
  #|            ],
  #|            "anyOf": [
  #|                {
  #|                    "properties": {
  #|                        "bar": true
  #|                    },
  #|                    "unevaluatedProperties": false
  #|                }
  #|            ]
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "base case: both properties present",
  #|                "data": {
  #|                    "foo": 1,
  #|                    "bar": 1
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "in place applicator siblings, bar is missing",
  #|                "data": {
  #|                    "foo": 1
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "in place applicator siblings, foo is missing",
  #|                "data": {
  #|                    "bar": 1
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties + single cyclic ref",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "x": { "$ref": "#" }
  #|            },
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "Empty is valid",
  #|                "data": {},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "Single is valid",
  #|                "data": { "x": {} },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "Unevaluated on 1st level is invalid",
  #|                "data": { "x": {}, "y": {} },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "Nested is valid",
  #|                "data": { "x": { "x": {} } },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "Unevaluated on 2nd level is invalid",
  #|                "data": { "x": { "x": {}, "y": {} } },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "Deep nested is valid",
  #|                "data": { "x": { "x": { "x": {} } } },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "Unevaluated on 3rd level is invalid",
  #|                "data": { "x": { "x": { "x": {}, "y": {} } } },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties + ref inside allOf / oneOf",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$defs": {
  #|                "one": {
  #|                    "properties": { "a": true }
  #|                },
  #|                "two": {
  #|                    "required": ["x"],
  #|                    "properties": { "x": true }
  #|                }
  #|            },
  #|            "allOf": [
  #|                { "$ref": "#/$defs/one" },
  #|                { "properties": { "b": true } },
  #|                {
  #|                    "oneOf": [
  #|                        { "$ref": "#/$defs/two" },
  #|                        {
  #|                            "required": ["y"],
  #|                            "properties": { "y": true }
  #|                        }
  #|                    ]
  #|                }
  #|            ],
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "Empty is invalid (no x or y)",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a and b are invalid (no x or y)",
  #|                "data": { "a": 1, "b": 1 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "x and y are invalid",
  #|                "data": { "x": 1, "y": 1 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a and x are valid",
  #|                "data": { "a": 1, "x": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a and y are valid",
  #|                "data": { "a": 1, "y": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a and b and x are valid",
  #|                "data": { "a": 1, "b": 1, "x": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a and b and y are valid",
  #|                "data": { "a": 1, "b": 1, "y": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a and b and x and y are invalid",
  #|                "data": { "a": 1, "b": 1, "x": 1, "y": 1 },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "dynamic evalation inside nested refs",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "$defs": {
  #|                "one": {
  #|                    "oneOf": [
  #|                        { "$ref": "#/$defs/two" },
  #|                        { "required": ["b"], "properties": { "b": true } },
  #|                        { "required": ["xx"], "patternProperties": { "x": true } },
  #|                        { "required": ["all"], "unevaluatedProperties": true }
  #|                    ]
  #|                },
  #|                "two": {
  #|                    "oneOf": [
  #|                        { "required": ["c"], "properties": { "c": true } },
  #|                        { "required": ["d"], "properties": { "d": true } }
  #|                    ]
  #|                }
  #|            },
  #|            "oneOf": [
  #|                { "$ref": "#/$defs/one" },
  #|                { "required": ["a"], "properties": { "a": true } }
  #|            ],
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "Empty is invalid",
  #|                "data": {},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a is valid",
  #|                "data": { "a": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "b is valid",
  #|                "data": { "b": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "c is valid",
  #|                "data": { "c": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "d is valid",
  #|                "data": { "d": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "a + b is invalid",
  #|                "data": { "a": 1, "b": 1 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a + c is invalid",
  #|                "data": { "a": 1, "c": 1 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "a + d is invalid",
  #|                "data": { "a": 1, "d": 1 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "b + c is invalid",
  #|                "data": { "b": 1, "c": 1 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "b + d is invalid",
  #|                "data": { "b": 1, "d": 1 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "c + d is invalid",
  #|                "data": { "c": 1, "d": 1 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "xx is valid",
  #|                "data": { "xx": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "xx + foox is valid",
  #|                "data": { "xx": 1, "foox": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "xx + foo is invalid",
  #|                "data": { "xx": 1, "foo": 1 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "xx + a is invalid",
  #|                "data": { "xx": 1, "a": 1 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "xx + b is invalid",
  #|                "data": { "xx": 1, "b": 1 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "xx + c is invalid",
  #|                "data": { "xx": 1, "c": 1 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "xx + d is invalid",
  #|                "data": { "xx": 1, "d": 1 },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "all is valid",
  #|                "data": { "all": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all + foo is valid",
  #|                "data": { "all": 1, "foo": 1 },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "all + a is invalid",
  #|                "data": { "all": 1, "a": 1 },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "non-object instances are valid",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "ignores booleans",
  #|                "data": true,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores integers",
  #|                "data": 123,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores floats",
  #|                "data": 1.0,
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores arrays",
  #|                "data": [],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores strings",
  #|                "data": "foo",
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "ignores null",
  #|                "data": null,
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties with null valued instance properties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "unevaluatedProperties": {
  #|                "type": "null"
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "allows null valued properties",
  #|                "data": {"foo": null},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties not affected by propertyNames",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "propertyNames": {"maxLength": 1},
  #|            "unevaluatedProperties": {
  #|                "type": "number"
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "allows only number properties",
  #|                "data": {"a": 1},
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "string property is invalid",
  #|                "data": {"a": "b"},
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "unevaluatedProperties can see annotations from if without then and else",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "if": {
  #|                "patternProperties": {
  #|                    "foo": {
  #|                        "type": "string"
  #|                    }
  #|                }
  #|            },
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "valid in case if is evaluated",
  #|                "data": {
  #|                    "foo": "a"
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "invalid in case if is evaluated",
  #|                "data": {
  #|                    "bar": "a"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "dependentSchemas with unevaluatedProperties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {"foo2": {}},
  #|            "dependentSchemas": {
  #|                "foo" : {},
  #|                "foo2": {
  #|                    "properties": {
  #|                        "bar":{}
  #|                    }
  #|                }
  #|            },
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "unevaluatedProperties doesn't consider dependentSchemas",
  #|                "data": {"foo": ""},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "unevaluatedProperties doesn't see bar when foo2 is absent",
  #|                "data": {"bar": ""},
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "unevaluatedProperties sees bar when foo2 is present",
  #|                "data": { "foo2": "", "bar": ""},
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "Evaluated properties collection needs to consider instance location",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {
  #|                    "properties": {
  #|                        "bar": { "type": "string" }
  #|                    }
  #|                }
  #|            },
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with an unevaluated property that exists at another location",
  #|                "data": {
  #|                    "foo": { "bar": "foo" },
  #|                    "bar": "bar"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "Evaluated properties collection needs to consider instance location with patternProperties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {
  #|                    "patternProperties": {
  #|                        "^bar$": { "type": "string" }
  #|                    }
  #|                }
  #|            },
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with only the nested evaluated property",
  #|                "data": {
  #|                    "foo": { "bar": "foo" }
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with an unevaluated property that exists at another location",
  #|                "data": {
  #|                    "foo": { "bar": "foo" },
  #|                    "bar": "bar"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "Evaluated properties collection needs to consider instance location with additionalProperties",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "properties": {
  #|                "foo": {
  #|                    "additionalProperties": { "type": "string" }
  #|                }
  #|            },
  #|            "unevaluatedProperties": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "with only the nested evaluated property",
  #|                "data": {
  #|                    "foo": { "bar": "foo" }
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "with an unevaluated property that exists at another location",
  #|                "data": {
  #|                    "foo": { "bar": "foo" },
  #|                    "bar": "bar"
  #|                },
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_uniqueItems =
  #|[
  #|    {
  #|        "description": "uniqueItems validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "uniqueItems": true
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "unique array of integers is valid",
  #|                "data": [1, 2],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique array of integers is invalid",
  #|                "data": [1, 1],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "non-unique array of more than two integers is invalid",
  #|                "data": [1, 2, 1],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "numbers are unique if mathematically unequal",
  #|                "data": [1.0, 1.00, 1],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "false is not equal to zero",
  #|                "data": [0, false],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "true is not equal to one",
  #|                "data": [1, true],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "unique array of strings is valid",
  #|                "data": ["foo", "bar", "baz"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique array of strings is invalid",
  #|                "data": ["foo", "bar", "foo"],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "unique array of objects is valid",
  #|                "data": [{"foo": "bar"}, {"foo": "baz"}],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique array of objects is invalid",
  #|                "data": [{"foo": "bar"}, {"foo": "bar"}],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "property order of array of objects is ignored",
  #|                "data": [{"foo": "bar", "bar": "foo"}, {"bar": "foo", "foo": "bar"}],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "unique array of nested objects is valid",
  #|                "data": [
  #|                    {"foo": {"bar" : {"baz" : true}}},
  #|                    {"foo": {"bar" : {"baz" : false}}}
  #|                ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique array of nested objects is invalid",
  #|                "data": [
  #|                    {"foo": {"bar" : {"baz" : true}}},
  #|                    {"foo": {"bar" : {"baz" : true}}}
  #|                ],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "unique array of arrays is valid",
  #|                "data": [["foo"], ["bar"]],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique array of arrays is invalid",
  #|                "data": [["foo"], ["foo"]],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "non-unique array of more than two arrays is invalid",
  #|                "data": [["foo"], ["bar"], ["foo"]],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "1 and true are unique",
  #|                "data": [1, true],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "0 and false are unique",
  #|                "data": [0, false],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[1] and [true] are unique",
  #|                "data": [[1], [true]],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[0] and [false] are unique",
  #|                "data": [[0], [false]],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "nested [1] and [true] are unique",
  #|                "data": [[[1], "foo"], [[true], "foo"]],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "nested [0] and [false] are unique",
  #|                "data": [[[0], "foo"], [[false], "foo"]],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "unique heterogeneous types are valid",
  #|                "data": [{}, [1], true, null, 1, "{}"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique heterogeneous types are invalid",
  #|                "data": [{}, [1], true, null, {}, 1],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "different objects are unique",
  #|                "data": [{"a": 1, "b": 2}, {"a": 2, "b": 1}],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "objects are non-unique despite key order",
  #|                "data": [{"a": 1, "b": 2}, {"b": 2, "a": 1}],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "{\"a\": false} and {\"a\": 0} are unique",
  #|                "data": [{"a": false}, {"a": 0}],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "{\"a\": true} and {\"a\": 1} are unique",
  #|                "data": [{"a": true}, {"a": 1}],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "uniqueItems with an array of items",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [{"type": "boolean"}, {"type": "boolean"}],
  #|            "uniqueItems": true
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "[false, true] from items array is valid",
  #|                "data": [false, true],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[true, false] from items array is valid",
  #|                "data": [true, false],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[false, false] from items array is not valid",
  #|                "data": [false, false],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "[true, true] from items array is not valid",
  #|                "data": [true, true],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "unique array extended from [false, true] is valid",
  #|                "data": [false, true, "foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "unique array extended from [true, false] is valid",
  #|                "data": [true, false, "foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique array extended from [false, true] is not valid",
  #|                "data": [false, true, "foo", "foo"],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "non-unique array extended from [true, false] is not valid",
  #|                "data": [true, false, "foo", "foo"],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "uniqueItems with an array of items and additionalItems=false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [{"type": "boolean"}, {"type": "boolean"}],
  #|            "uniqueItems": true,
  #|            "items": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "[false, true] from items array is valid",
  #|                "data": [false, true],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[true, false] from items array is valid",
  #|                "data": [true, false],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[false, false] from items array is not valid",
  #|                "data": [false, false],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "[true, true] from items array is not valid",
  #|                "data": [true, true],
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "extra items are invalid even if unique",
  #|                "data": [false, true, null],
  #|                "valid": false
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "uniqueItems=false validation",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "uniqueItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "unique array of integers is valid",
  #|                "data": [1, 2],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique array of integers is valid",
  #|                "data": [1, 1],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "numbers are unique if mathematically unequal",
  #|                "data": [1.0, 1.00, 1],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "false is not equal to zero",
  #|                "data": [0, false],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "true is not equal to one",
  #|                "data": [1, true],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "unique array of objects is valid",
  #|                "data": [{"foo": "bar"}, {"foo": "baz"}],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique array of objects is valid",
  #|                "data": [{"foo": "bar"}, {"foo": "bar"}],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "unique array of nested objects is valid",
  #|                "data": [
  #|                    {"foo": {"bar" : {"baz" : true}}},
  #|                    {"foo": {"bar" : {"baz" : false}}}
  #|                ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique array of nested objects is valid",
  #|                "data": [
  #|                    {"foo": {"bar" : {"baz" : true}}},
  #|                    {"foo": {"bar" : {"baz" : true}}}
  #|                ],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "unique array of arrays is valid",
  #|                "data": [["foo"], ["bar"]],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique array of arrays is valid",
  #|                "data": [["foo"], ["foo"]],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "1 and true are unique",
  #|                "data": [1, true],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "0 and false are unique",
  #|                "data": [0, false],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "unique heterogeneous types are valid",
  #|                "data": [{}, [1], true, null, 1],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique heterogeneous types are valid",
  #|                "data": [{}, [1], true, null, {}, 1],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "uniqueItems=false with an array of items",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [{"type": "boolean"}, {"type": "boolean"}],
  #|            "uniqueItems": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "[false, true] from items array is valid",
  #|                "data": [false, true],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[true, false] from items array is valid",
  #|                "data": [true, false],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[false, false] from items array is valid",
  #|                "data": [false, false],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[true, true] from items array is valid",
  #|                "data": [true, true],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "unique array extended from [false, true] is valid",
  #|                "data": [false, true, "foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "unique array extended from [true, false] is valid",
  #|                "data": [true, false, "foo", "bar"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique array extended from [false, true] is valid",
  #|                "data": [false, true, "foo", "foo"],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "non-unique array extended from [true, false] is valid",
  #|                "data": [true, false, "foo", "foo"],
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "uniqueItems=false with an array of items and additionalItems=false",
  #|        "schema": {
  #|            "$schema": "https://json-schema.org/draft/2020-12/schema",
  #|            "prefixItems": [{"type": "boolean"}, {"type": "boolean"}],
  #|            "uniqueItems": false,
  #|            "items": false
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "[false, true] from items array is valid",
  #|                "data": [false, true],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[true, false] from items array is valid",
  #|                "data": [true, false],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[false, false] from items array is valid",
  #|                "data": [false, false],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "[true, true] from items array is valid",
  #|                "data": [true, true],
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "extra items are invalid even if unique",
  #|                "data": [false, true, null],
  #|                "valid": false
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_vocabulary =
  #|[
  #|    {
  #|        "description": "schema that uses custom metaschema with with no validation vocabulary",
  #|        "schema": {
  #|            "$id": "https://schema/using/no/validation",
  #|            "$schema": "http://localhost:1234/draft2020-12/metaschema-no-validation.json",
  #|            "properties": {
  #|                "badProperty": false,
  #|                "numberProperty": {
  #|                    "minimum": 10
  #|                }
  #|            }
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "applicator vocabulary still works",
  #|                "data": {
  #|                    "badProperty": "this property should not exist"
  #|                },
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "no validation: valid number",
  #|                "data": {
  #|                    "numberProperty": 20
  #|                },
  #|                "valid": true
  #|            },
  #|            {
  #|                "description": "no validation: invalid number, but it still validates",
  #|                "data": {
  #|                    "numberProperty": 1
  #|                },
  #|                "valid": true
  #|            }
  #|        ]
  #|    },
  #|    {
  #|        "description": "ignore unrecognized optional vocabulary",
  #|        "schema": {
  #|            "$schema": "http://localhost:1234/draft2020-12/metaschema-optional-vocabulary.json",
  #|            "type": "number"
  #|        },
  #|        "tests": [
  #|            {
  #|                "description": "string value",
  #|                "data": "foobar",
  #|                "valid": false
  #|            },
  #|            {
  #|                "description": "number value",
  #|                "data": 20,
  #|                "valid": true
  #|            }
  #|        ]
  #|    }
  #|]

///|
let suite_files : Array[(String, String)] = [
  ("additionalProperties", suite_additionalProperties),
  ("allOf", suite_allOf),
  ("anchor", suite_anchor),
  ("anyOf", suite_anyOf),
  ("boolean-schema", suite_boolean_schema),
  ("const", suite_const),
  ("contains", suite_contains),
  ("content", suite_content),
  ("default", suite_default),
  ("defs", suite_defs),
  ("dependentRequired", suite_dependentRequired),
  ("dependentSchemas", suite_dependentSchemas),
  ("dynamicRef", suite_dynamicRef),
  ("enum", suite_enum),
  ("exclusiveMaximum", suite_exclusiveMaximum),
  ("exclusiveMinimum", suite_exclusiveMinimum),
  ("format", suite_format),
  ("if-then-else", suite_if_then_else),
  ("infinite-loop-detection", suite_infinite_loop_detection),
  ("items", suite_items),
  ("maxContains", suite_maxContains),
  ("maxItems", suite_maxItems),
  ("maxLength", suite_maxLength),
  ("maxProperties", suite_maxProperties),
  ("maximum", suite_maximum),
  ("minContains", suite_minContains),
  ("minItems", suite_minItems),
  ("minLength", suite_minLength),
  ("minProperties", suite_minProperties),
  ("minimum", suite_minimum),
  ("multipleOf", suite_multipleOf),
  ("not", suite_not),
  ("oneOf", suite_oneOf),
  ("pattern", suite_pattern),
  ("patternProperties", suite_patternProperties),
  ("prefixItems", suite_prefixItems),
  ("properties", suite_properties),
  ("propertyNames", suite_propertyNames),
  ("ref", suite_ref),
  ("refRemote", suite_refRemote),
  ("required", suite_required),
  ("type", suite_type),
  ("unevaluatedItems", suite_unevaluatedItems),
  ("unevaluatedProperties", suite_unevaluatedProperties),
  ("uniqueItems", suite_uniqueItems),
  ("vocabulary", suite_vocabulary),
]
